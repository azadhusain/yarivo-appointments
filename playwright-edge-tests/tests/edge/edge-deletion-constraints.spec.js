/**
 * Edge Case Test Suite: Referential Integrity & Deletion Constraint Guards
 * Tests that services or staff members with active confirmed appointments cannot be deleted.
 */

const { test, expect } = require('../../fixtures/base-fixture');
const { generateUniqueService, generateUniqueCustomer } = require('../../utils/string-helper');
const { getTodayString } = require('../../utils/date-helper');

test.describe('@edge Deletion Constraint Safeguards', () => {
  test('should block deletion of a service with active confirmed appointments', async ({
    authenticatedOwner,
    apiClient,
  }) => {
    const { dashboardPage } = authenticatedOwner;

    // 1. Create a service via API
    const newService = generateUniqueService();
    const srvRes = await apiClient.createService(newService);
    const serviceId = srvRes.data.id;

    // 2. Book an appointment for this service
    const pubBiz = await apiClient.getMyBusiness();
    const slug = pubBiz.data.slug;
    const today = getTodayString();
    const slotsRes = await apiClient.getPublicSlots(slug, serviceId, today);
    const targetSlot = slotsRes.data[0];

    const customer = generateUniqueCustomer();
    await apiClient.bookAppointment(slug, {
      ...customer,
      serviceId,
      staffId: targetSlot.staff_id,
      startTime: targetSlot.start_time,
    });

    // 3. Open dashboard Services tab and attempt to delete the service
    await dashboardPage.switchToServicesTab();
    await dashboardPage.deleteService(newService.name);

    // 4. Verify system shows error message blocking deletion
    await dashboardPage.expectErrorMessage(/Cannot delete service with active confirmed appointments/i);
    // Verify service is still present in the list
    await expect(dashboardPage.page.getByText(newService.name)).toBeVisible();
  });
});
