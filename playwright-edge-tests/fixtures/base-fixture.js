/**
 * Base custom fixture extending Playwright's test with instantiated Page Objects & API Client.
 */

const { test: base, expect } = require('@playwright/test');
const PublicBookingPage = require('../pages/PublicBookingPage');
const RegisterPage = require('../pages/RegisterPage');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const ApiClient = require('../utils/api-client');

const test = base.extend({
  // Page Objects
  publicBookingPage: async ({ page }, use) => {
    const bookingPage = new PublicBookingPage(page);
    await use(bookingPage);
  },

  registerPage: async ({ page }, use) => {
    const regPage = new RegisterPage(page);
    await use(regPage);
  },

  loginPage: async ({ page }, use) => {
    const lPage = new LoginPage(page);
    await use(lPage);
  },

  dashboardPage: async ({ page }, use) => {
    const dashPage = new DashboardPage(page);
    await use(dashPage);
  },

  // API Client fixture
  apiClient: async ({}, use) => {
    const client = new ApiClient();
    await use(client);
  },

  // Authenticated Owner Context fixture (creates a brand new business via API and injects token into browser)
  authenticatedOwner: async ({ page, apiClient }, use) => {
    const { generateUniqueBusiness } = require('../utils/string-helper');
    const businessData = generateUniqueBusiness();

    const regRes = await apiClient.registerBusiness(businessData);
    if (!regRes.ok) {
      throw new Error(`Failed to create test business via API: ${JSON.stringify(regRes.data)}`);
    }

    const token = regRes.data.access_token;
    await page.goto('/');
    await page.evaluate((t) => localStorage.setItem('token', t), token);
    await page.reload();

    const dashboardPage = new DashboardPage(page);
    await use({
      token,
      business: businessData,
      dashboardPage,
    });
  },
});

module.exports = { test, expect };
