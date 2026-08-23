/**
 * Regression Test Suite: Appointment Status Transitions
 * Tests transitioning confirmed appointments to Completed, No-Show, and Cancelled.
 */

const { test, expect } = require('../../fixtures/base-fixture');
const { generateUniqueCustomer } = require('../../utils/string-helper');
const { getTodayString } = require('../../utils/date-helper');

test.describe('@regression Appointment Lifecycle & Status Transitions', () => {
  test('should allow the owner to transition appointment status to Completed', async ({
    authenticatedOwner,
    apiClient,
  }) => {
    const { business, dashboardPage } = authenticatedOwner;

    await test.step('Create an appointment via API for testing', async () => {
      // Fetch public business slug and default service
      const pubBizRes = await apiClient.request('/business/me');
      const slug = pubBizRes.data.slug;
      const srvListRes = await apiClient.request(`/business/public/${slug}/services`);
      const defaultService = srvListRes.data[0];

      // Fetch slots
      const today = getTodayString();
      const slotsRes = await apiClient.getPublicSlots(slug, defaultService.id, today);
      const slot = slotsRes.data[0];

      const customer = generateUniqueCustomer();
      await apiClient.bookAppointment(slug, {
        ...customer,
        serviceId: defaultService.id,
        staffId: slot.staff_id,
        startTime: slot.start_time,
      });
    });

    await test.step('View appointment in dashboard and click Complete', async () => {
      await dashboardPage.switchToAppointmentsTab();
      await dashboardPage.clickRefreshAppointments();

      await expect(dashboardPage.appointmentCards.first()).toBeVisible();
      await dashboardPage.updateAppointmentStatus(0, 'Complete');
      await dashboardPage.expectAppointmentStatus(0, 'COMPLETED');
    });
  });
});
