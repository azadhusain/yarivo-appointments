/**
 * Smoke Test: Business Owner Login & Logout Flow (Happy Path)
 * Verifies successful login using owner credentials and secure logout.
 */

const { test, expect } = require('../../fixtures/base-fixture');
const { generateUniqueBusiness } = require('../../utils/string-helper');

test.describe('@smoke Business Owner Login & Logout', () => {
  let registeredOwner;

  test.beforeEach(async ({ apiClient }) => {
    registeredOwner = generateUniqueBusiness();
    const res = await apiClient.registerBusiness(registeredOwner);
    expect(res.ok).toBeTruthy();
  });

  test('should log in successfully with valid owner credentials and logout properly', async ({
    page,
    loginPage,
    dashboardPage,
  }) => {
    await test.step('Navigate to login view', async () => {
      await loginPage.goto('/');
      await loginPage.clickLoginNav();
    });

    await test.step('Submit login credentials', async () => {
      await loginPage.login(registeredOwner.ownerEmail, registeredOwner.password);
    });

    await test.step('Verify navigation to Dashboard', async () => {
      await expect(dashboardPage.businessTitle).toContainText(registeredOwner.name);
      await expect(dashboardPage.appointmentsTabBtn).toBeVisible();
    });

    await test.step('Perform logout and verify session cleanup', async () => {
      await dashboardPage.clickLogoutNav();
      const token = await dashboardPage.getLocalStorageToken();
      expect(token).toBeNull();
      await expect(page.getByRole('button', { name: /📅 Book Appointment/i })).toBeVisible();
    });
  });
});
