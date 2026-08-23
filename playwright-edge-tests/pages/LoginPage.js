/**
 * LoginPage: Page Object for the Owner Login flow.
 */

const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);

    this.emailInput = page.locator('input[placeholder*="owner@example.com" i], input[placeholder*="business@example.com" i]').first();
    this.passwordInput = page.locator('input[type="password"]').first();
    this.submitBtn = page.getByRole('button', { name: /Sign In|Signing in\.\.\./i });
    this.registerLink = page.getByRole('button', { name: /Need an account\? Register your business/i });
  }

  async fillCredentials(email, password) {
    if (email !== undefined) await this.emailInput.fill(email);
    if (password !== undefined) await this.passwordInput.fill(password);
  }

  async submit() {
    await this.submitBtn.click();
  }

  async login(email, password) {
    await this.fillCredentials(email, password);
    await this.submit();
  }

  async clickRegisterLink() {
    await this.registerLink.click();
  }

  async expectFieldError(errorMessage) {
    const errorLocator = this.page.locator(`p.text-red-600:has-text("${errorMessage}"), p.text-red-400:has-text("${errorMessage}")`).first();
    await expect(errorLocator).toBeVisible({ timeout: 10000 });
  }
}

module.exports = LoginPage;
