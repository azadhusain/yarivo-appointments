/**
 * DashboardPage: Page Object for the Owner Dashboard managing Appointments, Services, Staff, and Operating Hours.
 */

const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');

class DashboardPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);

    // Business Header Info
    this.businessTitle = page.locator('h2.font-bold').first();
    this.publicLinkText = page.locator('span.font-mono').first();

    // Tab buttons
    this.appointmentsTabBtn = page.getByRole('button', { name: /appointments/i });
    this.servicesTabBtn = page.getByRole('button', { name: /services/i });
    this.staffTabBtn = page.getByRole('button', { name: /staff/i });
    this.hoursTabBtn = page.getByRole('button', { name: /hours/i });

    // Appointments Tab Locators
    this.refreshAppointmentsBtn = page.getByRole('button', { name: /Refresh/i });
    this.appointmentCards = page.locator('div.divide-y > div');
    this.emptyAppointmentsMsg = page.getByText(/No appointments booked yet/i);

    // Services Tab Locators
    this.servicesList = page.locator('div.divide-y > div');
    this.serviceNameInput = page.locator('input[placeholder*="Haircut & Styling" i]').first();
    this.serviceDescInput = page.locator('input[placeholder*="Brief description" i]').first();
    this.serviceDurationInput = page.locator('label:has-text("Duration") + input, input[type="number"]').first();
    this.servicePriceInput = page.locator('label:has-text("Price") + input, input[type="number"]').nth(1);
    this.servicePrepBufferInput = page.locator('input[type="number"]').nth(2);
    this.serviceCleanupBufferInput = page.locator('input[type="number"]').nth(3);
    this.serviceActiveCheckbox = page.locator('input[type="checkbox"]:has-text("Active"), label:has-text("Active") input');
    this.saveServiceBtn = page.getByRole('button', { name: /Create Service|Update Service/i });
    this.cancelEditServiceBtn = page.getByRole('button', { name: /Cancel|Switch to New Service/i }).first();

    // Staff Tab Locators
    this.staffList = page.locator('div.divide-y > div');
    this.staffNameInput = page.locator('input[placeholder*="Alex Stylist" i]').first();
    this.staffEmailInput = page.locator('input[placeholder*="alex@mysalon.com" i]').first();
    this.staffPhoneInput = page.locator('input[placeholder*="+1 555-0100" i]').first();
    this.staffActiveCheckbox = page.locator('label:has-text("Active") input');
    this.saveStaffBtn = page.getByRole('button', { name: /Add Staff|Update Staff/i });
    this.cancelEditStaffBtn = page.getByRole('button', { name: /Cancel|Switch to New Staff/i }).first();

    // Business Hours Locators
    this.saveHoursBtn = page.getByRole('button', { name: /Save Operating Hours/i });
    this.dayRows = page.locator('div.space-y-3 > div');
  }

  // --- Tab Navigation ---
  async switchToAppointmentsTab() {
    await this.appointmentsTabBtn.click();
  }

  async switchToServicesTab() {
    await this.servicesTabBtn.click();
  }

  async switchToStaffTab() {
    await this.staffTabBtn.click();
  }

  async switchToHoursTab() {
    await this.hoursTabBtn.click();
  }

  // --- Appointments Tab Methods ---
  async clickRefreshAppointments() {
    await this.refreshAppointmentsBtn.click();
  }

  async updateAppointmentStatus(appointmentIndex, actionName) {
    const card = this.appointmentCards.nth(appointmentIndex);
    const actionBtn = card.getByRole('button', { name: new RegExp(actionName, 'i') });
    await actionBtn.click();
  }

  async expectAppointmentStatus(appointmentIndex, statusText) {
    const card = this.appointmentCards.nth(appointmentIndex);
    await expect(card).toContainText(statusText);
  }

  // --- Services Tab Methods ---
  async fillServiceForm({ name, description, duration, price, bufferBefore, bufferAfter }) {
    if (name !== undefined) await this.serviceNameInput.fill(name);
    if (description !== undefined) await this.serviceDescInput.fill(description);
    if (duration !== undefined) await this.serviceDurationInput.fill(String(duration));
    if (price !== undefined) await this.servicePriceInput.fill(String(price));
    if (bufferBefore !== undefined) await this.servicePrepBufferInput.fill(String(bufferBefore));
    if (bufferAfter !== undefined) await this.serviceCleanupBufferInput.fill(String(bufferAfter));
  }

  async createService(serviceData) {
    await this.fillServiceForm(serviceData);
    await this.saveServiceBtn.click();
  }

  async selectServiceForEdit(serviceName) {
    const item = this.servicesList.filter({ hasText: serviceName }).first();
    await item.click();
  }

  async deleteService(serviceName) {
    const item = this.servicesList.filter({ hasText: serviceName }).first();
    const deleteBtn = item.locator('button[title="Delete service"], button[aria-label="Delete service"]').first();
    
    // Register dialog handler for window.confirm
    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });
    await deleteBtn.click();
  }

  // --- Staff Tab Methods ---
  async fillStaffForm({ name, email, phone }) {
    if (name !== undefined) await this.staffNameInput.fill(name);
    if (email !== undefined) await this.staffEmailInput.fill(email);
    if (phone !== undefined) await this.staffPhoneInput.fill(phone);
  }

  async createStaff(staffData) {
    await this.fillStaffForm(staffData);
    await this.saveStaffBtn.click();
  }

  async selectStaffForEdit(staffName) {
    const item = this.staffList.filter({ hasText: staffName }).first();
    await item.click();
  }

  async deleteStaff(staffName) {
    const item = this.staffList.filter({ hasText: staffName }).first();
    const deleteBtn = item.locator('button[title="Delete staff member"], button[aria-label="Delete staff member"]').first();

    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });
    await deleteBtn.click();
  }

  // --- Business Hours Methods ---
  async toggleDayOpen(dayIndex, isOpen) {
    const row = this.dayRows.nth(dayIndex);
    const checkbox = row.locator('input[type="checkbox"]');
    const isCurrentlyChecked = await checkbox.isChecked();
    if (isCurrentlyChecked !== isOpen) {
      await checkbox.click();
    }
  }

  async setDayTimes(dayIndex, openingTime, closingTime) {
    const row = this.dayRows.nth(dayIndex);
    const timeInputs = row.locator('input[type="time"]');
    if (await timeInputs.count() >= 2) {
      if (openingTime) await timeInputs.nth(0).fill(openingTime);
      if (closingTime) await timeInputs.nth(1).fill(closingTime);
    }
  }

  async saveBusinessHours() {
    await this.saveHoursBtn.click();
  }
}

module.exports = DashboardPage;
