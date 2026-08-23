/**
 * PublicBookingPage: Page Object for the customer-facing booking flow.
 */

const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');

class PublicBookingPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);

    // Business selection
    this.businessCards = page.locator('div[class*="cursor-pointer"] h3, div[class*="cursor-pointer"] div.font-semibold');
    this.businessListContainer = page.locator('div.grid');
    this.changeBusinessBtn = page.getByRole('button', { name: /Change/i });
    this.selectedBusinessHeader = page.locator('div.border h3, div.border h2');

    // Service & Staff selectors
    this.serviceRadios = page.locator('input[type="radio"][name="service"]');
    this.serviceCards = page.locator('label:has(input[name="service"]), div:has-text("min")');
    this.staffRadios = page.locator('input[type="radio"][name="staff"]');

    // Custom Date Picker
    this.datePickerTrigger = page.locator('button:has-text("📅")');
    this.datePickerPopover = page.locator('div.z-50');
    this.datePickerNextMonth = page.getByRole('button', { name: '›' });
    this.datePickerPrevMonth = page.getByRole('button', { name: '‹' });

    // Available Slots
    this.slotsContainer = page.locator('div.grid');
    this.slotButtons = page.locator('button:has-text(":")');
    this.noSlotsMessage = page.getByText(/No available slots for this date|Closed/i);
    this.loadingSlotsSpinner = page.getByText(/Loading available slots.../i);

    // Customer Form Inputs
    this.nameInput = page.locator('input[placeholder*="Jane Doe" i], input[placeholder*="name" i]').first();
    this.emailInput = page.locator('input[type="email"], input[placeholder*="jane@example.com" i]').first();
    this.phoneInput = page.locator('input[type="tel"], input[placeholder*="+1 555" i]').first();
    this.notesInput = page.locator('textarea, input[placeholder*="Special requests" i], input[placeholder*="notes" i]').first();
    this.confirmBookingBtn = page.getByRole('button', { name: /Book Appointment|Confirm Booking|Confirming\.\.\./i });

    // Field Validation Errors
    this.fieldErrors = page.locator('p.text-red-600, p.text-red-400');
    this.slotError = page.locator('p:has-text("Please choose an appointment time slot")');

    // Success State Card
    this.bookingSuccessCard = page.locator('div:has-text("Appointment Confirmed"), div:has-text("🎉")');
    this.bookAnotherBtn = page.getByRole('button', { name: /Book Another Appointment/i });
  }

  async selectBusinessByName(businessName) {
    const businessCard = this.page.locator(`text=${businessName}`).first();
    await businessCard.click();
  }

  async selectFirstAvailableBusiness() {
    const firstBusiness = this.page.locator('div[class*="rounded-2xl"][class*="cursor-pointer"], button[class*="rounded-2xl"]').first();
    await firstBusiness.waitFor({ state: 'visible' });
    await firstBusiness.click();
  }

  async selectServiceByName(serviceName) {
    const serviceOption = this.page.locator(`button:has-text("${serviceName}"), label:has-text("${serviceName}"), div:has-text("${serviceName}")`).first();
    await serviceOption.click();
  }

  async selectStaffByName(staffName) {
    const staffOption = this.page.locator(`button:has-text("${staffName}"), label:has-text("${staffName}"), div:has-text("${staffName}")`).first();
    await staffOption.click();
  }

  async openDatePicker() {
    await this.datePickerTrigger.click();
  }

  async selectDayInDatePicker(dayNumber) {
    await this.openDatePicker();
    const dayBtn = this.page.locator(`div.z-50 button:text-is("${dayNumber}"):not([disabled])`).first();
    await dayBtn.click();
  }

  async selectFirstAvailableSlot() {
    await expect(this.slotButtons.first()).toBeVisible({ timeout: 10000 });
    await this.slotButtons.first().click();
  }

  async selectSlotByTime(timeString) {
    const slot = this.slotButtons.filter({ hasText: timeString }).first();
    await slot.click();
  }

  async fillCustomerDetails({ name, email, phone, notes }) {
    if (name !== undefined) {
      await this.nameInput.fill(name);
    }
    if (email !== undefined) {
      await this.emailInput.fill(email);
    }
    if (phone !== undefined) {
      await this.phoneInput.fill(phone);
    }
    if (notes !== undefined) {
      await this.notesInput.fill(notes);
    }
  }

  async submitBooking() {
    await this.confirmBookingBtn.click();
  }

  async completeBookingFlow(customerData) {
    await this.selectFirstAvailableSlot();
    await this.fillCustomerDetails(customerData);
    await this.submitBooking();
  }

  async expectBookingSuccess() {
    await expect(this.bookingSuccessCard).toBeVisible({ timeout: 10000 });
    await expect(this.bookAnotherBtn).toBeVisible();
  }

  async expectFieldError(errorMessage) {
    const errorLocator = this.page.locator(`p.text-red-600:has-text("${errorMessage}"), p.text-red-400:has-text("${errorMessage}")`).first();
    await expect(errorLocator).toBeVisible({ timeout: 10000 });
  }
}

module.exports = PublicBookingPage;
