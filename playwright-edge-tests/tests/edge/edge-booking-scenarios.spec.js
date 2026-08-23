/**
 * Edge Case Test Suite: Public Booking Scenarios & Boundary Values
 * Tests slot race conditions, Unicode/Emoji names, invalid inputs, and missing slot guards.
 */

const { test, expect } = require('../../fixtures/base-fixture');
const { generateUniqueBusiness, generateUniqueCustomer } = require('../../utils/string-helper');
const { specialAndUnicodeStrings } = require('../../test-data/security-data');
const { textNotesBoundaries } = require('../../test-data/boundary-data');
const { invalidEmails } = require('../../test-data/invalid-data');

test.describe('@edge Public Booking Edge Cases & Boundaries', () => {
  let createdBusiness;

  test.beforeEach(async ({ apiClient }) => {
    createdBusiness = generateUniqueBusiness();
    const res = await apiClient.registerBusiness(createdBusiness);
    expect(res.ok).toBeTruthy();
  });

  test('should reject booking when no time slot is selected', async ({
    publicBookingPage,
  }) => {
    await publicBookingPage.goto('/');
    await publicBookingPage.selectBusinessByName(createdBusiness.name);

    // Fill form without selecting a slot
    const customer = generateUniqueCustomer();
    await publicBookingPage.fillCustomerDetails(customer);
    await publicBookingPage.submitBooking();

    // Verify slot validation error
    await publicBookingPage.expectFieldError('Please choose an appointment time slot');
  });

  test('should handle customer names with Unicode, Accents, and Emojis', async ({
    page,
    publicBookingPage,
  }) => {
    await publicBookingPage.goto('/');
    await publicBookingPage.selectBusinessByName(createdBusiness.name);
    await publicBookingPage.selectFirstAvailableSlot();

    const unicodeCustomer = {
      name: specialAndUnicodeStrings.emojiName,
      email: 'unicode.client@example.com',
      phone: '+1 555-0199',
      notes: specialAndUnicodeStrings.accentsAndUmlauts,
    };

    await publicBookingPage.fillCustomerDetails(unicodeCustomer);
    await publicBookingPage.submitBooking();

    await publicBookingPage.expectBookingSuccess();
    await expect(page.getByText(specialAndUnicodeStrings.emojiName)).toBeVisible();
  });

  test('should handle large boundary text notes gracefully', async ({
    publicBookingPage,
  }) => {
    await publicBookingPage.goto('/');
    await publicBookingPage.selectBusinessByName(createdBusiness.name);
    await publicBookingPage.selectFirstAvailableSlot();

    const customer = {
      name: 'Boundary Tester',
      email: 'boundary@example.com',
      notes: textNotesBoundaries.longNotes,
    };

    await publicBookingPage.fillCustomerDetails(customer);
    await publicBookingPage.submitBooking();
    await publicBookingPage.expectBookingSuccess();
  });

  test('should show inline validation errors for invalid email formats', async ({
    publicBookingPage,
  }) => {
    await publicBookingPage.goto('/');
    await publicBookingPage.selectBusinessByName(createdBusiness.name);
    await publicBookingPage.selectFirstAvailableSlot();

    for (const invalidEmail of invalidEmails.slice(0, 3)) {
      await publicBookingPage.emailInput.fill(invalidEmail);
      await publicBookingPage.submitBooking();
      await publicBookingPage.expectFieldError('valid email');
    }
  });

  test('should handle double-booking conflict (409) gracefully with error message', async ({
    page,
    publicBookingPage,
    apiClient,
  }) => {
    // 1. Fetch available slots via API
    const pubBizRes = await apiClient.request(`/business/public/${createdBusiness.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`);
    const slug = pubBizRes.data.slug;
    const srvRes = await apiClient.request(`/business/public/${slug}/services`);
    const service = srvRes.data[0];

    const today = new Date().toISOString().split('T')[0];
    const slotsRes = await apiClient.getPublicSlots(slug, service.id, today);
    const targetSlot = slotsRes.data[0];

    // 2. Open UI and select target slot
    await publicBookingPage.goto('/');
    await publicBookingPage.selectBusinessByName(createdBusiness.name);
    await publicBookingPage.selectFirstAvailableSlot();
    await publicBookingPage.fillCustomerDetails({
      name: 'UI Customer',
      email: 'ui.customer@test.com',
    });

    // 3. Concurrently book this exact slot via API in the background (simulating another user grabbing the slot first)
    await apiClient.bookAppointment(slug, {
      name: 'Fast API Booker',
      email: 'fast@test.com',
      serviceId: service.id,
      staffId: targetSlot.staff_id,
      startTime: targetSlot.start_time,
    });

    // 4. Now click submit in the UI
    await publicBookingPage.submitBooking();

    // 5. Verify 409 conflict error is captured and displayed
    await publicBookingPage.expectErrorMessage(/already booked|conflict|failed/i);
  });
});
