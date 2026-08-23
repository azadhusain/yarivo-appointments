# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: edge\edge-deletion-constraints.spec.js >> @edge Deletion Constraint Safeguards >> should block deletion of a service with active confirmed appointments
- Location: tests\edge\edge-deletion-constraints.spec.js:11:3

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
  2  |  * Edge Case Test Suite: Referential Integrity & Deletion Constraint Guards
  3  |  * Tests that services or staff members with active confirmed appointments cannot be deleted.
  4  |  */
  5  | 
  6  | const { test, expect } = require('../../fixtures/base-fixture');
  7  | const { generateUniqueService, generateUniqueCustomer } = require('../../utils/string-helper');
  8  | const { getTodayString } = require('../../utils/date-helper');
  9  | 
  10 | test.describe('@edge Deletion Constraint Safeguards', () => {
  11 |   test('should block deletion of a service with active confirmed appointments', async ({
  12 |     authenticatedOwner,
  13 |     apiClient,
  14 |   }) => {
  15 |     const { dashboardPage } = authenticatedOwner;
  16 | 
  17 |     // 1. Create a service via API
  18 |     const newService = generateUniqueService();
  19 |     const srvRes = await apiClient.createService(newService);
  20 |     const serviceId = srvRes.data.id;
  21 | 
  22 |     // 2. Book an appointment for this service
  23 |     const pubBiz = await apiClient.getMyBusiness();
  24 |     const slug = pubBiz.data.slug;
  25 |     const today = getTodayString();
  26 |     const slotsRes = await apiClient.getPublicSlots(slug, serviceId, today);
  27 |     const targetSlot = slotsRes.data[0];
  28 | 
  29 |     const customer = generateUniqueCustomer();
  30 |     await apiClient.bookAppointment(slug, {
  31 |       ...customer,
  32 |       serviceId,
> 33 |       staffId: targetSlot.staff_id,
     |                           ^ TypeError: Cannot read properties of undefined (reading 'staff_id')
  34 |       startTime: targetSlot.start_time,
  35 |     });
  36 | 
  37 |     // 3. Open dashboard Services tab and attempt to delete the service
  38 |     await dashboardPage.switchToServicesTab();
  39 |     await dashboardPage.deleteService(newService.name);
  40 | 
  41 |     // 4. Verify system shows error message blocking deletion
  42 |     await dashboardPage.expectErrorMessage(/Cannot delete service with active confirmed appointments/i);
  43 |     // Verify service is still present in the list
  44 |     await expect(dashboardPage.page.getByText(newService.name)).toBeVisible();
  45 |   });
  46 | });
  47 | 
```