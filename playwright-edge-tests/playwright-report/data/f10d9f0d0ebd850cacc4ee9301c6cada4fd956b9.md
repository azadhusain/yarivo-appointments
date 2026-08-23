# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression\regression-appointments.spec.js >> @regression Appointment Lifecycle & Status Transitions >> should allow the owner to transition appointment status to Completed
- Location: tests\regression\regression-appointments.spec.js:11:3

# Error details

```
TypeError: Cannot read properties of undefined (reading 'staff_id')
```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - generic [ref=f1e2]:
    - banner [ref=f1e3]:
      - generic [ref=f1e4]:
        - generic [ref=f1e5] [cursor=pointer]:
          - generic [ref=f1e6]: "Y"
          - generic [ref=f1e7]:
            - generic [ref=f1e8]:
              - generic [ref=f1e9]: Yarivo
              - generic [ref=f1e10]: Global
            - generic [ref=f1e11]: Appointments
        - navigation [ref=f1e12]:
          - button "Public Booking" [ref=f1e13]
          - button "Business Login" [ref=f1e14]
          - button "Register Business" [ref=f1e15]
    - main [ref=f1e16]:
      - generic [ref=f1e17]:
        - generic [ref=f1e18]:
          - heading "Book an Appointment" [level=1] [ref=f1e19]
          - paragraph [ref=f1e20]: Select a business, choose your service, pick a date, and reserve your slot instantly.
        - generic [ref=f1e21]:
          - heading "1. Select Business" [level=2] [ref=f1e22]
          - generic [ref=f1e23]: Loading businesses...
    - contentinfo [ref=f1e24]:
      - generic [ref=f1e25]:
        - generic [ref=f1e26]:
          - generic [ref=f1e27]: "Y"
          - generic [ref=f1e28]: Yarivo Appointments
          - generic [ref=f1e29]: ·
          - generic [ref=f1e30]: yarivo.com
        - generic [ref=f1e31]: © 2026 Yarivo. Global Appointment & Booking Platform.
  - button "Open Next.js Dev Tools" [ref=f1e37] [cursor=pointer]
  - alert [ref=f1e43]
```

# Test source

```ts
  1  | /**
  2  |  * Regression Test Suite: Appointment Status Transitions
  3  |  * Tests transitioning confirmed appointments to Completed, No-Show, and Cancelled.
  4  |  */
  5  | 
  6  | const { test, expect } = require('../../fixtures/base-fixture');
  7  | const { generateUniqueCustomer } = require('../../utils/string-helper');
  8  | const { getTodayString } = require('../../utils/date-helper');
  9  | 
  10 | test.describe('@regression Appointment Lifecycle & Status Transitions', () => {
  11 |   test('should allow the owner to transition appointment status to Completed', async ({
  12 |     authenticatedOwner,
  13 |     apiClient,
  14 |   }) => {
  15 |     const { business, dashboardPage } = authenticatedOwner;
  16 | 
  17 |     await test.step('Create an appointment via API for testing', async () => {
  18 |       // Fetch public business slug and default service
  19 |       const pubBizRes = await apiClient.request('/business/me');
  20 |       const slug = pubBizRes.data.slug;
  21 |       const srvListRes = await apiClient.request(`/business/public/${slug}/services`);
  22 |       const defaultService = srvListRes.data[0];
  23 | 
  24 |       // Fetch slots
  25 |       const today = getTodayString();
  26 |       const slotsRes = await apiClient.getPublicSlots(slug, defaultService.id, today);
  27 |       const slot = slotsRes.data[0];
  28 | 
  29 |       const customer = generateUniqueCustomer();
  30 |       await apiClient.bookAppointment(slug, {
  31 |         ...customer,
  32 |         serviceId: defaultService.id,
> 33 |         staffId: slot.staff_id,
     |                       ^ TypeError: Cannot read properties of undefined (reading 'staff_id')
  34 |         startTime: slot.start_time,
  35 |       });
  36 |     });
  37 | 
  38 |     await test.step('View appointment in dashboard and click Complete', async () => {
  39 |       await dashboardPage.switchToAppointmentsTab();
  40 |       await dashboardPage.clickRefreshAppointments();
  41 | 
  42 |       await expect(dashboardPage.appointmentCards.first()).toBeVisible();
  43 |       await dashboardPage.updateAppointmentStatus(0, 'Complete');
  44 |       await dashboardPage.expectAppointmentStatus(0, 'COMPLETED');
  45 |     });
  46 |   });
  47 | });
  48 | 
```