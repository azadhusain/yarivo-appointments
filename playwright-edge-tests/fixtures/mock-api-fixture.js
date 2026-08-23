/**
 * Mock API Fixture for fault injection, simulating latency, network errors, and offline UI state testing.
 */

const { test: base, expect } = require('@playwright/test');
const mockData = require('../test-data/mock-responses');

const test = base.extend({
  mockApi: async ({ page }, use) => {
    // Helper methods to set up network interception routes
    const mockController = {
      async setupStandardMockRoutes() {
        // Mock list public businesses
        await page.route('**/api/v1/business/public', async (route) => {
          await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([mockData.mockBusiness]),
          });
        });

        // Mock public business details
        await page.route(`**/api/v1/business/public/${mockData.mockBusiness.slug}`, async (route) => {
          await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(mockData.mockBusiness),
          });
        });

        // Mock public services
        await page.route(`**/api/v1/business/public/${mockData.mockBusiness.slug}/services`, async (route) => {
          await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(mockData.mockServices),
          });
        });

        // Mock public staff
        await page.route(`**/api/v1/business/public/${mockData.mockBusiness.slug}/staff`, async (route) => {
          await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(mockData.mockStaffList),
          });
        });

        // Mock public slots
        await page.route(`**/api/v1/business/public/${mockData.mockBusiness.slug}/slots*`, async (route) => {
          await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(mockData.mockSlots),
          });
        });

        // Mock successful public booking
        await page.route(`**/api/v1/business/public/${mockData.mockBusiness.slug}/book`, async (route) => {
          if (route.request().method() === 'POST') {
            await route.fulfill({
              status: 201,
              contentType: 'application/json',
              body: JSON.stringify(mockData.mockAppointment),
            });
          } else {
            await route.continue();
          }
        });
      },

      async simulateHttp500(urlPattern) {
        await page.route(urlPattern, async (route) => {
          await route.fulfill({
            status: 500,
            contentType: 'application/json',
            body: JSON.stringify({ detail: 'Internal Server Error: Unexpected DB failure' }),
          });
        });
      },

      async simulateConflict409(urlPattern, errorMessage = 'Time slot already booked') {
        await page.route(urlPattern, async (route) => {
          await route.fulfill({
            status: 409,
            contentType: 'application/json',
            body: JSON.stringify({ detail: errorMessage }),
          });
        });
      },

      async simulateNetworkAbort(urlPattern) {
        await page.route(urlPattern, async (route) => {
          await route.abort('failed');
        });
      },

      async simulateSlowNetwork(urlPattern, delayMs = 3000) {
        await page.route(urlPattern, async (route) => {
          await new Promise((resolve) => setTimeout(resolve, delayMs));
          await route.continue();
        });
      },
    };

    await use(mockController);
  },
});

module.exports = { test, expect };
