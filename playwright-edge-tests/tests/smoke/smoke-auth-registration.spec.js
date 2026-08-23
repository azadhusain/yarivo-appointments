/**
 * Smoke Test: Business Owner Registration (Happy Path)
 * Verifies business owner registration, default seed creation, token storage, and redirection to the dashboard.
 */

const { test, expect } = require('../../fixtures/base-fixture');
const { generateUniqueBusiness } = require('../../utils/string-helper');

test.describe('@smoke Business Owner Registration', () => {
  test('should register a new business and automatically open the owner dashboard', async ({
    page,
    registerPage,
    dashboardPage,
  }) => {
    const newBiz = generateUniqueBusiness();

    await test.step('Navigate to registration page', async () => {
      await registerPage.goto('/');
      await registerPage.clickRegisterNav();
    });

    await test.step('Fill registration form and submit', async () => {
      await registerPage.registerBusiness(newBiz);
    });

    await test.step('Verify dashboard is rendered with business profile', async () => {
      await expect(dashboardPage.businessTitle).toContainText(newBiz.name);
      await expect(dashboardPage.publicLinkText).toBeVisible();

      // Verify token is stored in localStorage
      const token = await dashboardPage.getLocalStorageToken();
      expect(token).toBeTruthy();
    });
  });
});
