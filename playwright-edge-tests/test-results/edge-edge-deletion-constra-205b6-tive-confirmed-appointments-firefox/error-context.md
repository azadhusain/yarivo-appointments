# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: edge\edge-deletion-constraints.spec.js >> @edge Deletion Constraint Safeguards >> should block deletion of a service with active confirmed appointments
- Location: tests\edge\edge-deletion-constraints.spec.js:11:3

# Error details

```
TimeoutError: page.goto: Timeout 15000ms exceeded.
Call log:
  - navigating to "http://localhost:3000/", waiting until "load"

```

# Test source

```ts
  1  | /**
  2  |  * Base custom fixture extending Playwright's test with instantiated Page Objects & API Client.
  3  |  */
  4  | 
  5  | const { test: base, expect } = require('@playwright/test');
  6  | const PublicBookingPage = require('../pages/PublicBookingPage');
  7  | const RegisterPage = require('../pages/RegisterPage');
  8  | const LoginPage = require('../pages/LoginPage');
  9  | const DashboardPage = require('../pages/DashboardPage');
  10 | const ApiClient = require('../utils/api-client');
  11 | 
  12 | const test = base.extend({
  13 |   // Page Objects
  14 |   publicBookingPage: async ({ page }, use) => {
  15 |     const bookingPage = new PublicBookingPage(page);
  16 |     await use(bookingPage);
  17 |   },
  18 | 
  19 |   registerPage: async ({ page }, use) => {
  20 |     const regPage = new RegisterPage(page);
  21 |     await use(regPage);
  22 |   },
  23 | 
  24 |   loginPage: async ({ page }, use) => {
  25 |     const lPage = new LoginPage(page);
  26 |     await use(lPage);
  27 |   },
  28 | 
  29 |   dashboardPage: async ({ page }, use) => {
  30 |     const dashPage = new DashboardPage(page);
  31 |     await use(dashPage);
  32 |   },
  33 | 
  34 |   // API Client fixture
  35 |   apiClient: async ({}, use) => {
  36 |     const client = new ApiClient();
  37 |     await use(client);
  38 |   },
  39 | 
  40 |   // Authenticated Owner Context fixture (creates a brand new business via API and injects token into browser)
  41 |   authenticatedOwner: async ({ page, apiClient }, use) => {
  42 |     const { generateUniqueBusiness } = require('../utils/string-helper');
  43 |     const businessData = generateUniqueBusiness();
  44 | 
  45 |     const regRes = await apiClient.registerBusiness(businessData);
  46 |     if (!regRes.ok) {
  47 |       throw new Error(`Failed to create test business via API: ${JSON.stringify(regRes.data)}`);
  48 |     }
  49 | 
  50 |     const token = regRes.data.access_token;
> 51 |     await page.goto('/');
     |                ^ TimeoutError: page.goto: Timeout 15000ms exceeded.
  52 |     await page.evaluate((t) => localStorage.setItem('token', t), token);
  53 |     await page.reload();
  54 | 
  55 |     const dashboardPage = new DashboardPage(page);
  56 |     await use({
  57 |       token,
  58 |       business: businessData,
  59 |       dashboardPage,
  60 |     });
  61 |   },
  62 | });
  63 | 
  64 | module.exports = { test, expect };
  65 | 
```