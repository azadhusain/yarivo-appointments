/**
 * Regression Test Suite: Staff Management CRUD
 * Tests staff addition, editing contact information, and viewing staff list.
 */

const { test, expect } = require('../../fixtures/base-fixture');
const { generateUniqueStaff } = require('../../utils/string-helper');

test.describe('@regression Staff Management', () => {
  test('should create and update staff members successfully', async ({
    authenticatedOwner,
  }) => {
    const { dashboardPage } = authenticatedOwner;

    await test.step('Switch to Staff tab', async () => {
      await dashboardPage.switchToStaffTab();
    });

    const staffMember = generateUniqueStaff();

    await test.step('Add new staff member', async () => {
      await dashboardPage.createStaff(staffMember);
      await expect(dashboardPage.page.getByText(staffMember.name)).toBeVisible();
      await expect(dashboardPage.page.getByText(staffMember.email)).toBeVisible();
    });

    await test.step('Edit staff phone number', async () => {
      await dashboardPage.selectStaffForEdit(staffMember.name);
      await dashboardPage.staffPhoneInput.fill('+1 555-0999');
      await dashboardPage.saveStaffBtn.click();

      await expect(dashboardPage.page.getByText('+1 555-0999')).toBeVisible();
    });
  });
});
