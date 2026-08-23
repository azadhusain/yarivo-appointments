# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: edge\edge-network-faults.spec.js >> @edge Network Faults & Error Resilience >> should keep submit button in disabled loading state during slow network requests to prevent duplicate submits
- Location: tests\edge\edge-network-faults.spec.js:49:3

# Error details

```
TimeoutError: locator.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('input[placeholder*="Jane Doe" i], input[placeholder*="name" i]').first()

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5] [cursor=pointer]:
          - generic [ref=e6]: "Y"
          - generic [ref=e7]:
            - generic [ref=e8]:
              - generic [ref=e9]: Yarivo
              - generic [ref=e10]: Global
            - generic [ref=e11]: Appointments
        - navigation [ref=e12]:
          - button "Public Booking" [ref=e13]
          - button "Business Login" [ref=e14]
          - button "Register Business" [ref=e15]
    - main [ref=e16]:
      - generic [ref=e17]:
        - generic [ref=e18]:
          - heading "Book an Appointment" [level=1] [ref=e19]
          - paragraph [ref=e20]: Select a business, choose your service, pick a date, and reserve your slot instantly.
        - generic [ref=e21]:
          - heading "1. Select Business" [level=2] [ref=e22]
          - button "Mock Elite Salon Premier styling with mock backend UTC USD" [ref=e24]:
            - generic [ref=e25]: Mock Elite Salon
            - paragraph [ref=e26]: Premier styling with mock backend
            - generic [ref=e27]:
              - generic [ref=e28]: UTC
              - generic [ref=e29]: USD
        - generic [ref=e30]:
          - generic [ref=e31]:
            - heading "Mock Elite Salon" [level=3] [ref=e32]
            - paragraph [ref=e33]: 100 Mockingbird Lane · +1 555-0100
          - separator [ref=e34]
          - generic [ref=e35]:
            - heading "2. Select Service" [level=4] [ref=e36]
            - generic [ref=e37]:
              - button "Signature Haircut 50 USD Full wash, cut, and blow dry ⏱️ 30 mins" [ref=e38]:
                - generic [ref=e39]:
                  - generic [ref=e40]: Signature Haircut
                  - generic [ref=e41]: 50 USD
                - paragraph [ref=e42]: Full wash, cut, and blow dry
                - generic [ref=e43]: ⏱️ 30 mins
              - button "Beard Trim & Shape 30 USD Hot towel shave and shaping ⏱️ 20 mins" [ref=e44]:
                - generic [ref=e45]:
                  - generic [ref=e46]: Beard Trim & Shape
                  - generic [ref=e47]: 30 USD
                - paragraph [ref=e48]: Hot towel shave and shaping
                - generic [ref=e49]: ⏱️ 20 mins
          - generic [ref=e50]:
            - generic [ref=e51]:
              - generic [ref=e52]: Select Date
              - button "📅 Sun, Aug 23, 2026 ▼" [ref=e54] [cursor=pointer]:
                - generic [ref=e55]:
                  - generic [ref=e56]: 📅
                  - generic [ref=e57]: Sun, Aug 23, 2026
                - generic [ref=e58]: ▼
            - generic [ref=e59]:
              - generic [ref=e60]: Preferred Staff (Optional)
              - combobox [ref=e61]:
                - option "Any available staff member" [selected]
                - option "Alex Stylist"
          - generic [ref=e62]:
            - generic [ref=e64]:
              - heading "3. Available Slots" [level=4] [ref=e65]
              - generic [ref=e66]: All times shown in business timezone (UTC)
            - generic [ref=e67]:
              - button "09:00 AM" [ref=e68]
              - button "10:00 AM" [ref=e69]
              - button "11:00 AM" [ref=e70]
              - button "02:00 PM" [ref=e71]
          - generic [ref=e72]:
            - heading "Complete Your Booking" [level=4] [ref=e73]
            - generic [ref=e74]:
              - generic [ref=e75]:
                - generic [ref=e76]: Your Full Name *
                - textbox "John Doe" [ref=e77]
              - generic [ref=e78]:
                - generic [ref=e79]: Email Address *
                - textbox "john@example.com" [ref=e80]
              - generic [ref=e81]:
                - generic [ref=e82]: Mobile / Phone Number
                - textbox "+1 555-0199" [ref=e83]
              - generic [ref=e84]:
                - generic [ref=e85]: Notes for Appointment
                - textbox "Any special requests or preferences" [ref=e86]
            - button "Book Appointment" [ref=e87]
    - contentinfo [ref=e88]:
      - generic [ref=e89]:
        - generic [ref=e90]:
          - generic [ref=e91]: "Y"
          - generic [ref=e92]: Yarivo Appointments
          - generic [ref=e93]: ·
          - generic [ref=e94]: yarivo.com
        - generic [ref=e95]: © 2026 Yarivo. Global Appointment & Booking Platform.
  - button "Open Next.js Dev Tools" [ref=e101] [cursor=pointer]
  - alert [ref=e107]
```

# Test source

```ts
  1   | /**
  2   |  * PublicBookingPage: Page Object for the customer-facing booking flow.
  3   |  */
  4   | 
  5   | const { expect } = require('@playwright/test');
  6   | const BasePage = require('./BasePage');
  7   | 
  8   | class PublicBookingPage extends BasePage {
  9   |   /**
  10  |    * @param {import('@playwright/test').Page} page
  11  |    */
  12  |   constructor(page) {
  13  |     super(page);
  14  | 
  15  |     // Business selection
  16  |     this.businessCards = page.locator('div[class*="cursor-pointer"] h3, div[class*="cursor-pointer"] div.font-semibold');
  17  |     this.businessListContainer = page.locator('div.grid');
  18  |     this.changeBusinessBtn = page.getByRole('button', { name: /Change/i });
  19  |     this.selectedBusinessHeader = page.locator('div.border h3, div.border h2');
  20  | 
  21  |     // Service & Staff selectors
  22  |     this.serviceRadios = page.locator('input[type="radio"][name="service"]');
  23  |     this.serviceCards = page.locator('label:has(input[name="service"]), div:has-text("min")');
  24  |     this.staffRadios = page.locator('input[type="radio"][name="staff"]');
  25  | 
  26  |     // Custom Date Picker
  27  |     this.datePickerTrigger = page.locator('button:has-text("📅")');
  28  |     this.datePickerPopover = page.locator('div.z-50');
  29  |     this.datePickerNextMonth = page.getByRole('button', { name: '›' });
  30  |     this.datePickerPrevMonth = page.getByRole('button', { name: '‹' });
  31  | 
  32  |     // Available Slots
  33  |     this.slotsContainer = page.locator('div.grid');
  34  |     this.slotButtons = page.locator('button:has-text(":")');
  35  |     this.noSlotsMessage = page.getByText(/No available slots for this date|Closed/i);
  36  |     this.loadingSlotsSpinner = page.getByText(/Loading available slots.../i);
  37  | 
  38  |     // Customer Form Inputs
  39  |     this.nameInput = page.locator('input[placeholder*="Jane Doe" i], input[placeholder*="name" i]').first();
  40  |     this.emailInput = page.locator('input[type="email"], input[placeholder*="jane@example.com" i]').first();
  41  |     this.phoneInput = page.locator('input[type="tel"], input[placeholder*="+1 555" i]').first();
  42  |     this.notesInput = page.locator('textarea, input[placeholder*="Special requests" i], input[placeholder*="notes" i]').first();
  43  |     this.confirmBookingBtn = page.getByRole('button', { name: /Book Appointment|Confirm Booking|Confirming\.\.\./i });
  44  | 
  45  |     // Field Validation Errors
  46  |     this.fieldErrors = page.locator('p.text-red-600, p.text-red-400');
  47  |     this.slotError = page.locator('p:has-text("Please choose an appointment time slot")');
  48  | 
  49  |     // Success State Card
  50  |     this.bookingSuccessCard = page.locator('div:has-text("Appointment Confirmed"), div:has-text("🎉")');
  51  |     this.bookAnotherBtn = page.getByRole('button', { name: /Book Another Appointment/i });
  52  |   }
  53  | 
  54  |   async selectBusinessByName(businessName) {
  55  |     const businessCard = this.page.locator(`text=${businessName}`).first();
  56  |     await businessCard.click();
  57  |   }
  58  | 
  59  |   async selectFirstAvailableBusiness() {
  60  |     const firstBusiness = this.page.locator('div[class*="rounded-2xl"][class*="cursor-pointer"], button[class*="rounded-2xl"]').first();
  61  |     await firstBusiness.waitFor({ state: 'visible' });
  62  |     await firstBusiness.click();
  63  |   }
  64  | 
  65  |   async selectServiceByName(serviceName) {
  66  |     const serviceOption = this.page.locator(`button:has-text("${serviceName}"), label:has-text("${serviceName}"), div:has-text("${serviceName}")`).first();
  67  |     await serviceOption.click();
  68  |   }
  69  | 
  70  |   async selectStaffByName(staffName) {
  71  |     const staffOption = this.page.locator(`button:has-text("${staffName}"), label:has-text("${staffName}"), div:has-text("${staffName}")`).first();
  72  |     await staffOption.click();
  73  |   }
  74  | 
  75  |   async openDatePicker() {
  76  |     await this.datePickerTrigger.click();
  77  |   }
  78  | 
  79  |   async selectDayInDatePicker(dayNumber) {
  80  |     await this.openDatePicker();
  81  |     const dayBtn = this.page.locator(`div.z-50 button:text-is("${dayNumber}"):not([disabled])`).first();
  82  |     await dayBtn.click();
  83  |   }
  84  | 
  85  |   async selectFirstAvailableSlot() {
  86  |     await expect(this.slotButtons.first()).toBeVisible({ timeout: 10000 });
  87  |     await this.slotButtons.first().click();
  88  |   }
  89  | 
  90  |   async selectSlotByTime(timeString) {
  91  |     const slot = this.slotButtons.filter({ hasText: timeString }).first();
  92  |     await slot.click();
  93  |   }
  94  | 
  95  |   async fillCustomerDetails({ name, email, phone, notes }) {
  96  |     if (name !== undefined) {
> 97  |       await this.nameInput.fill(name);
      |                            ^ TimeoutError: locator.fill: Timeout 10000ms exceeded.
  98  |     }
  99  |     if (email !== undefined) {
  100 |       await this.emailInput.fill(email);
  101 |     }
  102 |     if (phone !== undefined) {
  103 |       await this.phoneInput.fill(phone);
  104 |     }
  105 |     if (notes !== undefined) {
  106 |       await this.notesInput.fill(notes);
  107 |     }
  108 |   }
  109 | 
  110 |   async submitBooking() {
  111 |     await this.confirmBookingBtn.click();
  112 |   }
  113 | 
  114 |   async completeBookingFlow(customerData) {
  115 |     await this.selectFirstAvailableSlot();
  116 |     await this.fillCustomerDetails(customerData);
  117 |     await this.submitBooking();
  118 |   }
  119 | 
  120 |   async expectBookingSuccess() {
  121 |     await expect(this.bookingSuccessCard).toBeVisible({ timeout: 10000 });
  122 |     await expect(this.bookAnotherBtn).toBeVisible();
  123 |   }
  124 | 
  125 |   async expectFieldError(errorMessage) {
  126 |     const errorLocator = this.page.locator(`p.text-red-600:has-text("${errorMessage}"), p.text-red-400:has-text("${errorMessage}")`).first();
  127 |     await expect(errorLocator).toBeVisible({ timeout: 10000 });
  128 |   }
  129 | }
  130 | 
  131 | module.exports = PublicBookingPage;
  132 | 
```