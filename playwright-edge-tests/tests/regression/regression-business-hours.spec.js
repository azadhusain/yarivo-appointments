/**
 * Regression Test Suite: Weekly Operating Hours Configuration
 * Tests configuring open/closed days, operating times, and persistence.
 */

const { test, expect } = require('../../fixtures/base-fixture');

test.describe('@regression Business Operating Hours', () => {
  test('should configure and persist business opening and closing hours', async ({
    authenticatedOwner,
    page,
  }) => {
    const { dashboardPage } = authenticatedOwner;

    await test.step('Switch to Operating Hours tab', async () => {
      await dashboardPage.switchToHoursTab();
    });

    await test.step('Modify Monday operating hours to 10:00 - 19:00', async () => {
      await dashboardPage.setDayTimes(0, '10:00', '19:00');
      await dashboardPage.saveBusinessHours();
      await dashboardPage.expectSuccessMessage('Saved');
    });

    await test.step('Reload page and verify persisted values', async () => {
      await page.reload();
      await dashboardPage.switchToHoursTab();
      const mondayRow = dashboardPage.dayRows.nth(0);
      const timeInput = mondayRow.locator('input[type="time"]').first();
      await expect(timeInput).toHaveValue('10:00');
    });
  });
});
