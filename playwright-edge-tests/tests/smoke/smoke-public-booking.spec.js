/**
 * Smoke Test: Public Customer Booking Flow (Happy Path)
 * Verifies that a client can select a business, service, staff, date, slot, and complete a valid booking.
 */

const { test, expect } = require('../../fixtures/base-fixture');
const { generateUniqueCustomer, generateUniqueBusiness } = require('../../utils/string-helper');

test.describe('@smoke Public Customer Booking', () => {
  let createdBusiness;

  test.beforeEach(async ({ apiClient }) => {
    // Seed a live test business with default service & staff
    const bizData = generateUniqueBusiness();
    const res = await apiClient.registerBusiness(bizData);
    expect(res.ok).toBeTruthy();
    createdBusiness = bizData;
  });

  test('should successfully complete an end-to-end appointment booking', async ({
    page,
    publicBookingPage,
  }) => {
    await test.step('Navigate to public booking view', async () => {
      await publicBookingPage.goto('/');
      await publicBookingPage.clickBookNav();
    });

    await test.step('Select business and view services', async () => {
      await publicBookingPage.selectBusinessByName(createdBusiness.name);
      await expect(page.getByText(createdBusiness.name).first()).toBeVisible();
    });

    await test.step('Select appointment slot', async () => {
      await publicBookingPage.selectFirstAvailableSlot();
    });

    await test.step('Fill customer details and submit booking', async () => {
      const customer = generateUniqueCustomer();
      await publicBookingPage.fillCustomerDetails(customer);
      await publicBookingPage.submitBooking();
    });

    await test.step('Verify booking confirmation card is displayed', async () => {
      await publicBookingPage.expectBookingSuccess();
      await expect(page.getByText('🎉')).toBeVisible();
    });
  });
});
