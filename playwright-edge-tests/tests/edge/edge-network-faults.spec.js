/**
 * Edge Case Test Suite: Network Fault Injection & Server Error Resilience
 * Tests UI behavior under 500 internal errors, network disconnects, and high latency.
 */

const { test, expect } = require('../../fixtures/mock-api-fixture');
const PublicBookingPage = require('../../pages/PublicBookingPage');
const RegisterPage = require('../../pages/RegisterPage');
const mockData = require('../../test-data/mock-responses');

test.describe('@edge Network Faults & Error Resilience', () => {
  test('should display a friendly error message when backend returns 500 Internal Error on slots fetch', async ({
    page,
    mockApi,
  }) => {
    await mockApi.setupStandardMockRoutes();
    await mockApi.simulateHttp500('**/api/v1/business/public/*/slots*');

    const publicBookingPage = new PublicBookingPage(page);
    await publicBookingPage.goto('/');
    await publicBookingPage.selectBusinessByName(mockData.mockBusiness.name);

    // Verify error banner is rendered instead of unhandled app crash
    await publicBookingPage.expectErrorMessage(/Failed to fetch slots|Unexpected DB failure/i);
  });

  test('should display a network error banner when backend is unreachable or offline', async ({
    page,
    mockApi,
  }) => {
    await mockApi.setupStandardMockRoutes();
    await mockApi.simulateNetworkAbort('**/api/v1/auth/register');

    const registerPage = new RegisterPage(page);
    await registerPage.goto('/');
    await registerPage.clickRegisterNav();
    await registerPage.registerBusiness({
      name: 'Offline Salon',
      ownerName: 'Offline Owner',
      ownerEmail: 'offline@salon.test',
      password: 'Password123!',
      currency: 'USD',
    });

    // Verify network error message
    await registerPage.expectErrorMessage(/Unable to reach the backend server|failed/i);
  });

  test('should keep submit button in disabled loading state during slow network requests to prevent duplicate submits', async ({
    page,
    mockApi,
  }) => {
    await mockApi.setupStandardMockRoutes();
    // Simulate 2000ms delay on book endpoint
    await mockApi.simulateSlowNetwork('**/api/v1/business/public/*/book', 2000);

    const publicBookingPage = new PublicBookingPage(page);
    await publicBookingPage.goto('/');
    await publicBookingPage.selectBusinessByName(mockData.mockBusiness.name);
    await publicBookingPage.selectFirstAvailableSlot();
    await publicBookingPage.fillCustomerDetails({
      name: 'Slow Net Tester',
      email: 'slownet@test.com',
    });

    // Click submit and assert button is disabled during in-flight request
    const submitBtn = publicBookingPage.confirmBookingBtn;
    await submitBtn.click();
    await expect(submitBtn).toBeDisabled();

    // After delay, should finish booking
    await publicBookingPage.expectBookingSuccess();
  });
});
