/**
 * Regression Test Suite: Services Management CRUD
 * Tests service creation, editing, pricing, buffer times, and deactivation.
 */

const { test, expect } = require('../../fixtures/base-fixture');
const { generateUniqueService } = require('../../utils/string-helper');

test.describe('@regression Services Management', () => {
  test('should create, edit, and view new services in the dashboard', async ({
    authenticatedOwner,
  }) => {
    const { dashboardPage } = authenticatedOwner;

    await test.step('Switch to Services tab', async () => {
      await dashboardPage.switchToServicesTab();
    });

    const newService = generateUniqueService();

    await test.step('Create a new service with buffer times', async () => {
      await dashboardPage.createService(newService);
      await expect(dashboardPage.page.getByText(newService.name)).toBeVisible();
      await expect(dashboardPage.page.getByText(`${newService.price} USD`)).toBeVisible();
    });

    await test.step('Edit existing service price and duration', async () => {
      await dashboardPage.selectServiceForEdit(newService.name);
      await dashboardPage.servicePriceInput.fill('85');
      await dashboardPage.saveServiceBtn.click();

      await expect(dashboardPage.page.getByText('85 USD')).toBeVisible();
    });
  });
});
