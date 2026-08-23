# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: edge\edge-booking-scenarios.spec.js >> @edge Public Booking Edge Cases & Boundaries >> should handle customer names with Unicode, Accents, and Emojis
- Location: tests\edge\edge-booking-scenarios.spec.js:36:3

# Error details

```
TimeoutError: page.goto: Timeout 15000ms exceeded.
Call log:
  - navigating to "http://localhost:3000/", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | /**
  2  |  * BasePage: Core Page Object containing shared locators, navigations, resilient waits, and helpers.
  3  |  */
  4  | 
  5  | const { expect } = require('@playwright/test');
  6  | 
  7  | class BasePage {
  8  |   /**
  9  |    * @param {import('@playwright/test').Page} page
  10 |    */
  11 |   constructor(page) {
  12 |     this.page = page;
  13 | 
  14 |     // Header & Navigation locators scoped to <header>
  15 |     this.header = page.locator('header');
  16 |     this.brandLogo = page.locator('header').getByText('Yarivo');
  17 |     this.navBookBtn = page.locator('header').getByRole('button', { name: /Public Booking/i });
  18 |     this.navRegisterBtn = page.locator('header').getByRole('button', { name: /Register Business/i });
  19 |     this.navLoginBtn = page.locator('header').getByRole('button', { name: /Business Login/i });
  20 |     this.navDashboardBtn = page.locator('header').getByRole('button', { name: /^Dashboard$/i });
  21 |     this.navLogoutBtn = page.locator('header').getByRole('button', { name: /Logout/i });
  22 | 
  23 |     // Global Notification banners
  24 |     this.errorMessageBanner = page.locator('div.border-red-200, div.bg-red-50, div.text-red-700');
  25 |     this.successMessageBanner = page.locator('div.border-emerald-200, div.bg-emerald-50, div.text-emerald-700');
  26 |   }
  27 | 
  28 |   async goto(path = '/') {
> 29 |     await this.page.goto(path, { waitUntil: 'domcontentloaded' });
     |                     ^ TimeoutError: page.goto: Timeout 15000ms exceeded.
  30 |     await this.page.waitForTimeout(300);
  31 |   }
  32 | 
  33 |   async clickBookNav() {
  34 |     await this.navBookBtn.click();
  35 |     await this.page.waitForTimeout(200);
  36 |   }
  37 | 
  38 |   async clickRegisterNav() {
  39 |     await this.navRegisterBtn.click();
  40 |     await this.page.locator('input[placeholder*="My Salon & Spa" i], input[placeholder*="Salon" i]').first().waitFor({ state: 'visible', timeout: 10000 });
  41 |   }
  42 | 
  43 |   async clickLoginNav() {
  44 |     await this.navLoginBtn.click();
  45 |     await this.page.locator('input[placeholder*="owner@example.com" i]').first().waitFor({ state: 'visible', timeout: 10000 });
  46 |   }
  47 | 
  48 |   async clickDashboardNav() {
  49 |     await this.navDashboardBtn.click();
  50 |     await this.page.waitForTimeout(200);
  51 |   }
  52 | 
  53 |   async clickLogoutNav() {
  54 |     await this.navLogoutBtn.click();
  55 |     await this.page.waitForTimeout(200);
  56 |   }
  57 | 
  58 |   async expectErrorMessage(textPattern) {
  59 |     await expect(this.errorMessageBanner.first()).toBeVisible({ timeout: 10000 });
  60 |     if (textPattern) {
  61 |       await expect(this.errorMessageBanner.first()).toContainText(textPattern);
  62 |     }
  63 |   }
  64 | 
  65 |   async expectSuccessMessage(textPattern) {
  66 |     await expect(this.successMessageBanner.first()).toBeVisible({ timeout: 10000 });
  67 |     if (textPattern) {
  68 |       await expect(this.successMessageBanner.first()).toContainText(textPattern);
  69 |     }
  70 |   }
  71 | 
  72 |   async getLocalStorageToken() {
  73 |     return this.page.evaluate(() => localStorage.getItem('token'));
  74 |   }
  75 | 
  76 |   async setLocalStorageToken(token) {
  77 |     await this.page.evaluate((t) => localStorage.setItem('token', t), token);
  78 |   }
  79 | 
  80 |   async clearLocalStorage() {
  81 |     await this.page.evaluate(() => localStorage.clear());
  82 |   }
  83 | }
  84 | 
  85 | module.exports = BasePage;
  86 | 
```