/**
 * RegisterPage: Page Object for the Business Owner Registration flow.
 */

const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');

class RegisterPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);

    // Business details inputs
    this.businessNameInput = page.locator('input[placeholder*="My Salon & Spa" i], input[placeholder*="Salon" i]').first();
    this.descriptionInput = page.locator('input[placeholder*="Hair styling and color" i]').first();
    this.businessEmailInput = page.locator('input[placeholder*="contact@mysalon.com" i]').first();
    this.phoneInput = page.locator('input[placeholder*="+1 555-0100" i]').first();
    this.addressInput = page.locator('input[placeholder*="123 Main St" i]').first();
    this.timezoneInput = page.locator('input[placeholder*="America/New_York" i]').first();
    this.currencyInput = page.locator('input[placeholder*="USD" i]').first();

    // Owner details inputs
    this.ownerNameInput = page.locator('input[placeholder*="Jane Doe" i]').first();
    this.ownerEmailInput = page.locator('input[placeholder*="jane@mysalon.com" i]').first();
    this.passwordInput = page.locator('input[type="password"]').first();

    // Actions
    this.submitBtn = page.getByRole('button', { name: /Create Business|Registering\.\.\./i });
    this.clearFormBtn = page.getByRole('button', { name: /Clear Form/i });
    this.signInLink = page.getByRole('button', { name: /Already have an account\? Sign In/i });
  }

  async fillRegistrationForm({
    name,
    description,
    email,
    phone,
    address,
    timezone,
    currency,
    ownerName,
    ownerEmail,
    password,
  }) {
    if (name !== undefined) await this.businessNameInput.fill(name);
    if (description !== undefined && await this.descriptionInput.isVisible().catch(() => false)) {
      await this.descriptionInput.fill(description);
    }
    if (email !== undefined) await this.businessEmailInput.fill(email);
    if (phone !== undefined) await this.phoneInput.fill(phone);
    if (address !== undefined) await this.addressInput.fill(address);
    if (timezone !== undefined) await this.timezoneInput.fill(timezone);
    if (currency !== undefined) await this.currencyInput.fill(currency);
    if (ownerName !== undefined) await this.ownerNameInput.fill(ownerName);
    if (ownerEmail !== undefined) await this.ownerEmailInput.fill(ownerEmail);
    if (password !== undefined) await this.passwordInput.fill(password);
  }

  async submit() {
    await this.submitBtn.click();
  }

  async registerBusiness(businessData) {
    await this.fillRegistrationForm(businessData);
    await this.submit();
  }

  async clearForm() {
    await this.clearFormBtn.click();
  }

  async clickSignInLink() {
    await this.signInLink.click();
  }

  async expectFieldError(errorMessage) {
    const errorLocator = this.page.locator(`p.text-red-600:has-text("${errorMessage}"), p.text-red-400:has-text("${errorMessage}")`).first();
    await expect(errorLocator).toBeVisible({ timeout: 10000 });
  }
}

module.exports = RegisterPage;
