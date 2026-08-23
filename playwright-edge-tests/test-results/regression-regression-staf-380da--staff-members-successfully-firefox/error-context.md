# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression\regression-staff.spec.js >> @regression Staff Management >> should create and update staff members successfully
- Location: tests\regression\regression-staff.spec.js:10:3

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /staff/i })

```

# Test source

```ts
  1   | /**
  2   |  * DashboardPage: Page Object for the Owner Dashboard managing Appointments, Services, Staff, and Operating Hours.
  3   |  */
  4   | 
  5   | const { expect } = require('@playwright/test');
  6   | const BasePage = require('./BasePage');
  7   | 
  8   | class DashboardPage extends BasePage {
  9   |   /**
  10  |    * @param {import('@playwright/test').Page} page
  11  |    */
  12  |   constructor(page) {
  13  |     super(page);
  14  | 
  15  |     // Business Header Info
  16  |     this.businessTitle = page.locator('h2.font-bold').first();
  17  |     this.publicLinkText = page.locator('span.font-mono').first();
  18  | 
  19  |     // Tab buttons
  20  |     this.appointmentsTabBtn = page.getByRole('button', { name: /appointments/i });
  21  |     this.servicesTabBtn = page.getByRole('button', { name: /services/i });
  22  |     this.staffTabBtn = page.getByRole('button', { name: /staff/i });
  23  |     this.hoursTabBtn = page.getByRole('button', { name: /hours/i });
  24  | 
  25  |     // Appointments Tab Locators
  26  |     this.refreshAppointmentsBtn = page.getByRole('button', { name: /Refresh/i });
  27  |     this.appointmentCards = page.locator('div.divide-y > div');
  28  |     this.emptyAppointmentsMsg = page.getByText(/No appointments booked yet/i);
  29  | 
  30  |     // Services Tab Locators
  31  |     this.servicesList = page.locator('div.divide-y > div');
  32  |     this.serviceNameInput = page.locator('input[placeholder*="Haircut & Styling" i]').first();
  33  |     this.serviceDescInput = page.locator('input[placeholder*="Brief description" i]').first();
  34  |     this.serviceDurationInput = page.locator('label:has-text("Duration") + input, input[type="number"]').first();
  35  |     this.servicePriceInput = page.locator('label:has-text("Price") + input, input[type="number"]').nth(1);
  36  |     this.servicePrepBufferInput = page.locator('input[type="number"]').nth(2);
  37  |     this.serviceCleanupBufferInput = page.locator('input[type="number"]').nth(3);
  38  |     this.serviceActiveCheckbox = page.locator('input[type="checkbox"]:has-text("Active"), label:has-text("Active") input');
  39  |     this.saveServiceBtn = page.getByRole('button', { name: /Create Service|Update Service/i });
  40  |     this.cancelEditServiceBtn = page.getByRole('button', { name: /Cancel|Switch to New Service/i }).first();
  41  | 
  42  |     // Staff Tab Locators
  43  |     this.staffList = page.locator('div.divide-y > div');
  44  |     this.staffNameInput = page.locator('input[placeholder*="Alex Stylist" i]').first();
  45  |     this.staffEmailInput = page.locator('input[placeholder*="alex@mysalon.com" i]').first();
  46  |     this.staffPhoneInput = page.locator('input[placeholder*="+1 555-0100" i]').first();
  47  |     this.staffActiveCheckbox = page.locator('label:has-text("Active") input');
  48  |     this.saveStaffBtn = page.getByRole('button', { name: /Add Staff|Update Staff/i });
  49  |     this.cancelEditStaffBtn = page.getByRole('button', { name: /Cancel|Switch to New Staff/i }).first();
  50  | 
  51  |     // Business Hours Locators
  52  |     this.saveHoursBtn = page.getByRole('button', { name: /Save Operating Hours/i });
  53  |     this.dayRows = page.locator('div.space-y-3 > div');
  54  |   }
  55  | 
  56  |   // --- Tab Navigation ---
  57  |   async switchToAppointmentsTab() {
  58  |     await this.appointmentsTabBtn.click();
  59  |   }
  60  | 
  61  |   async switchToServicesTab() {
  62  |     await this.servicesTabBtn.click();
  63  |   }
  64  | 
  65  |   async switchToStaffTab() {
> 66  |     await this.staffTabBtn.click();
      |                            ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  67  |   }
  68  | 
  69  |   async switchToHoursTab() {
  70  |     await this.hoursTabBtn.click();
  71  |   }
  72  | 
  73  |   // --- Appointments Tab Methods ---
  74  |   async clickRefreshAppointments() {
  75  |     await this.refreshAppointmentsBtn.click();
  76  |   }
  77  | 
  78  |   async updateAppointmentStatus(appointmentIndex, actionName) {
  79  |     const card = this.appointmentCards.nth(appointmentIndex);
  80  |     const actionBtn = card.getByRole('button', { name: new RegExp(actionName, 'i') });
  81  |     await actionBtn.click();
  82  |   }
  83  | 
  84  |   async expectAppointmentStatus(appointmentIndex, statusText) {
  85  |     const card = this.appointmentCards.nth(appointmentIndex);
  86  |     await expect(card).toContainText(statusText);
  87  |   }
  88  | 
  89  |   // --- Services Tab Methods ---
  90  |   async fillServiceForm({ name, description, duration, price, bufferBefore, bufferAfter }) {
  91  |     if (name !== undefined) await this.serviceNameInput.fill(name);
  92  |     if (description !== undefined) await this.serviceDescInput.fill(description);
  93  |     if (duration !== undefined) await this.serviceDurationInput.fill(String(duration));
  94  |     if (price !== undefined) await this.servicePriceInput.fill(String(price));
  95  |     if (bufferBefore !== undefined) await this.servicePrepBufferInput.fill(String(bufferBefore));
  96  |     if (bufferAfter !== undefined) await this.serviceCleanupBufferInput.fill(String(bufferAfter));
  97  |   }
  98  | 
  99  |   async createService(serviceData) {
  100 |     await this.fillServiceForm(serviceData);
  101 |     await this.saveServiceBtn.click();
  102 |   }
  103 | 
  104 |   async selectServiceForEdit(serviceName) {
  105 |     const item = this.servicesList.filter({ hasText: serviceName }).first();
  106 |     await item.click();
  107 |   }
  108 | 
  109 |   async deleteService(serviceName) {
  110 |     const item = this.servicesList.filter({ hasText: serviceName }).first();
  111 |     const deleteBtn = item.locator('button[title="Delete service"], button[aria-label="Delete service"]').first();
  112 |     
  113 |     // Register dialog handler for window.confirm
  114 |     this.page.once('dialog', async (dialog) => {
  115 |       await dialog.accept();
  116 |     });
  117 |     await deleteBtn.click();
  118 |   }
  119 | 
  120 |   // --- Staff Tab Methods ---
  121 |   async fillStaffForm({ name, email, phone }) {
  122 |     if (name !== undefined) await this.staffNameInput.fill(name);
  123 |     if (email !== undefined) await this.staffEmailInput.fill(email);
  124 |     if (phone !== undefined) await this.staffPhoneInput.fill(phone);
  125 |   }
  126 | 
  127 |   async createStaff(staffData) {
  128 |     await this.fillStaffForm(staffData);
  129 |     await this.saveStaffBtn.click();
  130 |   }
  131 | 
  132 |   async selectStaffForEdit(staffName) {
  133 |     const item = this.staffList.filter({ hasText: staffName }).first();
  134 |     await item.click();
  135 |   }
  136 | 
  137 |   async deleteStaff(staffName) {
  138 |     const item = this.staffList.filter({ hasText: staffName }).first();
  139 |     const deleteBtn = item.locator('button[title="Delete staff member"], button[aria-label="Delete staff member"]').first();
  140 | 
  141 |     this.page.once('dialog', async (dialog) => {
  142 |       await dialog.accept();
  143 |     });
  144 |     await deleteBtn.click();
  145 |   }
  146 | 
  147 |   // --- Business Hours Methods ---
  148 |   async toggleDayOpen(dayIndex, isOpen) {
  149 |     const row = this.dayRows.nth(dayIndex);
  150 |     const checkbox = row.locator('input[type="checkbox"]');
  151 |     const isCurrentlyChecked = await checkbox.isChecked();
  152 |     if (isCurrentlyChecked !== isOpen) {
  153 |       await checkbox.click();
  154 |     }
  155 |   }
  156 | 
  157 |   async setDayTimes(dayIndex, openingTime, closingTime) {
  158 |     const row = this.dayRows.nth(dayIndex);
  159 |     const timeInputs = row.locator('input[type="time"]');
  160 |     if (await timeInputs.count() >= 2) {
  161 |       if (openingTime) await timeInputs.nth(0).fill(openingTime);
  162 |       if (closingTime) await timeInputs.nth(1).fill(closingTime);
  163 |     }
  164 |   }
  165 | 
  166 |   async saveBusinessHours() {
```