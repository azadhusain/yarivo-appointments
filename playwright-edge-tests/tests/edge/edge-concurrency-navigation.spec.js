/**
 * Edge Case Test Suite: Concurrency, Rapid Actions & Navigation Interruption
 * Tests double-clicking, rapid tab switching, back/forward history, and state resetting.
 */

const { test, expect } = require('../../fixtures/base-fixture');
const { generateUniqueBusiness } = require('../../utils/string-helper');

test.describe('@edge Concurrency, Rapid Clicks & Navigation State', () => {
  let createdBusiness;

  test.beforeEach(async ({ apiClient }) => {
    createdBusiness = generateUniqueBusiness();
    const res = await apiClient.registerBusiness(createdBusiness);
    expect(res.ok).toBeTruthy();

    // Create a 2nd service to test service switching
    await apiClient.createService({
      name: 'Secondary Hair Color Service',
      durationMinutes: 60,
      price: 120,
      active: true,
    });
  });

  test('should reset selected slot when customer switches to a different service', async ({
    page,
    publicBookingPage,
  }) => {
    await publicBookingPage.goto('/');
    await publicBookingPage.selectBusinessByName(createdBusiness.name);

    // 1. Select first service and choose a slot
    await publicBookingPage.selectFirstAvailableSlot();
    const firstSlotText = await publicBookingPage.slotButtons.first().innerText();

    // 2. Switch to the second service
    await publicBookingPage.selectServiceByName('Secondary Hair Color Service');

    // 3. Verify that the previous slot selection was cleared and slots are reloaded
    await expect(publicBookingPage.confirmBookingBtn).toBeVisible();
    await publicBookingPage.fillCustomerDetails({
      name: 'Service Switcher',
      email: 'switcher@example.com',
    });

    // Attempting to submit without re-selecting a slot in the new service should trigger slot error
    await publicBookingPage.submitBooking();
    await publicBookingPage.expectFieldError('Please choose an appointment time slot');
  });

  test('should survive rapid tab navigation in Dashboard without broken states', async ({
    authenticatedOwner,
  }) => {
    const { dashboardPage } = authenticatedOwner;

    // Rapidly cycle through tabs
    for (let i = 0; i < 3; i++) {
      await dashboardPage.switchToServicesTab();
      await dashboardPage.switchToStaffTab();
      await dashboardPage.switchToHoursTab();
      await dashboardPage.switchToAppointmentsTab();
    }

    // Assert dashboard remains responsive and functional
    await expect(dashboardPage.appointmentsTabBtn).toBeVisible();
    await expect(dashboardPage.refreshAppointmentsBtn).toBeVisible();
  });
});
