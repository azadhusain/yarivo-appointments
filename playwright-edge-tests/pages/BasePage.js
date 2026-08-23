/**
 * BasePage: Core Page Object containing shared locators, navigations, resilient waits, and helpers.
 */

const { expect } = require('@playwright/test');

class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Header & Navigation locators scoped to <header>
    this.header = page.locator('header');
    this.brandLogo = page.locator('header').getByText('Yarivo');
    this.navBookBtn = page.locator('header').getByRole('button', { name: /Public Booking/i });
    this.navRegisterBtn = page.locator('header').getByRole('button', { name: /Register Business/i });
    this.navLoginBtn = page.locator('header').getByRole('button', { name: /Business Login/i });
    this.navDashboardBtn = page.locator('header').getByRole('button', { name: /^Dashboard$/i });
    this.navLogoutBtn = page.locator('header').getByRole('button', { name: /Logout/i });

    // Global Notification banners
    this.errorMessageBanner = page.locator('div.border-red-200, div.bg-red-50, div.text-red-700');
    this.successMessageBanner = page.locator('div.border-emerald-200, div.bg-emerald-50, div.text-emerald-700');
  }

  async goto(path = '/') {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
    await this.page.waitForTimeout(300);
  }

  async clickBookNav() {
    await this.navBookBtn.click();
    await this.page.waitForTimeout(200);
  }

  async clickRegisterNav() {
    await this.navRegisterBtn.click();
    await this.page.locator('input[placeholder*="My Salon & Spa" i], input[placeholder*="Salon" i]').first().waitFor({ state: 'visible', timeout: 10000 });
  }

  async clickLoginNav() {
    await this.navLoginBtn.click();
    await this.page.locator('input[placeholder*="owner@example.com" i]').first().waitFor({ state: 'visible', timeout: 10000 });
  }

  async clickDashboardNav() {
    await this.navDashboardBtn.click();
    await this.page.waitForTimeout(200);
  }

  async clickLogoutNav() {
    await this.navLogoutBtn.click();
    await this.page.waitForTimeout(200);
  }

  async expectErrorMessage(textPattern) {
    await expect(this.errorMessageBanner.first()).toBeVisible({ timeout: 10000 });
    if (textPattern) {
      await expect(this.errorMessageBanner.first()).toContainText(textPattern);
    }
  }

  async expectSuccessMessage(textPattern) {
    await expect(this.successMessageBanner.first()).toBeVisible({ timeout: 10000 });
    if (textPattern) {
      await expect(this.successMessageBanner.first()).toContainText(textPattern);
    }
  }

  async getLocalStorageToken() {
    return this.page.evaluate(() => localStorage.getItem('token'));
  }

  async setLocalStorageToken(token) {
    await this.page.evaluate((t) => localStorage.setItem('token', t), token);
  }

  async clearLocalStorage() {
    await this.page.evaluate(() => localStorage.clear());
  }
}

module.exports = BasePage;
