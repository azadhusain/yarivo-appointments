# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\smoke-owner-login.spec.js >> @smoke Business Owner Login & Logout >> should log in successfully with valid owner credentials and logout properly
- Location: tests\smoke\smoke-owner-login.spec.js:18:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: /📅 Book Appointment/i })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: /📅 Book Appointment/i })

```

```yaml
- banner:
  - text: Y Yarivo Global Appointments
  - navigation:
    - button "Public Booking"
    - button "Business Login"
    - button "Register Business"
- main:
  - heading "Book an Appointment" [level=1]
  - paragraph: Select a business, choose your service, pick a date, and reserve your slot instantly.
  - heading "1. Select Business" [level=2]
  - 'button "Agenda Are you looking for examples of beauty & hair salon websites? Then you’ve landed in the right place. I often browse salon and spa websites at work, and when I begin a new website design project, I always seek inspiration from the top websites. So, I created this list with some of the best website examples. I’ll also pass along a few lessons from each example. When possible, I’m also calling out the website builder and online booking tool used, as these platforms will play a major role in the website experience you can create. Before we get into the examples, I also want to mention my video with salon website design tips: UTC USD"':
    - text: Agenda
    - paragraph: "Are you looking for examples of beauty & hair salon websites? Then you’ve landed in the right place. I often browse salon and spa websites at work, and when I begin a new website design project, I always seek inspiration from the top websites. So, I created this list with some of the best website examples. I’ll also pass along a few lessons from each example. When possible, I’m also calling out the website builder and online booking tool used, as these platforms will play a major role in the website experience you can create. Before we get into the examples, I also want to mention my video with salon website design tips:"
    - text: UTC USD
  - button "Apex Salon & Spa UTC USD"
  - button "Azad Asia/Calcutta USD"
  - button "Crown Salon UTC USD"
  - button "Salon <script>alert(\"XSS\")</script> UTC USD"
  - button "Salon <script>alert(\"XSS\")</script> UTC USD"
  - button "Salon <script>alert(\"XSS\")</script> UTC USD"
  - button "Salon <script>alert(\"XSS\")</script> UTC USD"
  - button "Test Salon 0amdq1 Auto-generated test business description 0amdq1 UTC USD":
    - text: Test Salon 0amdq1
    - paragraph: Auto-generated test business description 0amdq1
    - text: UTC USD
  - button "Test Salon 0bcq40 Auto-generated test business description 0bcq40 UTC USD":
    - text: Test Salon 0bcq40
    - paragraph: Auto-generated test business description 0bcq40
    - text: UTC USD
  - button "Test Salon 1bip1q Auto-generated test business description 1bip1q UTC USD":
    - text: Test Salon 1bip1q
    - paragraph: Auto-generated test business description 1bip1q
    - text: UTC USD
  - button "Test Salon 1gtheb Auto-generated test business description 1gtheb UTC USD":
    - text: Test Salon 1gtheb
    - paragraph: Auto-generated test business description 1gtheb
    - text: UTC USD
  - button "Test Salon 1hiobw Auto-generated test business description 1hiobw UTC USD":
    - text: Test Salon 1hiobw
    - paragraph: Auto-generated test business description 1hiobw
    - text: UTC USD
  - button "Test Salon 35kobd Auto-generated test business description 35kobd UTC USD":
    - text: Test Salon 35kobd
    - paragraph: Auto-generated test business description 35kobd
    - text: UTC USD
  - button "Test Salon 3kcg5c Auto-generated test business description 3kcg5c UTC USD":
    - text: Test Salon 3kcg5c
    - paragraph: Auto-generated test business description 3kcg5c
    - text: UTC USD
  - button "Test Salon 4odkr7 Auto-generated test business description 4odkr7 UTC USD":
    - text: Test Salon 4odkr7
    - paragraph: Auto-generated test business description 4odkr7
    - text: UTC USD
  - button "Test Salon 4xohph Auto-generated test business description 4xohph UTC USD":
    - text: Test Salon 4xohph
    - paragraph: Auto-generated test business description 4xohph
    - text: UTC USD
  - button "Test Salon 5kpeld Auto-generated test business description 5kpeld UTC USD":
    - text: Test Salon 5kpeld
    - paragraph: Auto-generated test business description 5kpeld
    - text: UTC USD
  - button "Test Salon 6xqwra Auto-generated test business description 6xqwra UTC USD":
    - text: Test Salon 6xqwra
    - paragraph: Auto-generated test business description 6xqwra
    - text: UTC USD
  - button "Test Salon 76cxtv Auto-generated test business description 76cxtv UTC USD":
    - text: Test Salon 76cxtv
    - paragraph: Auto-generated test business description 76cxtv
    - text: UTC USD
  - button "Test Salon 7bit9w Auto-generated test business description 7bit9w UTC USD":
    - text: Test Salon 7bit9w
    - paragraph: Auto-generated test business description 7bit9w
    - text: UTC USD
  - button "Test Salon 7nf9hv Auto-generated test business description 7nf9hv UTC USD":
    - text: Test Salon 7nf9hv
    - paragraph: Auto-generated test business description 7nf9hv
    - text: UTC USD
  - button "Test Salon 7o4pn7 Auto-generated test business description 7o4pn7 UTC USD":
    - text: Test Salon 7o4pn7
    - paragraph: Auto-generated test business description 7o4pn7
    - text: UTC USD
  - button "Test Salon 8h9i5t Auto-generated test business description 8h9i5t UTC USD":
    - text: Test Salon 8h9i5t
    - paragraph: Auto-generated test business description 8h9i5t
    - text: UTC USD
  - button "Test Salon a68qlk Auto-generated test business description a68qlk UTC USD":
    - text: Test Salon a68qlk
    - paragraph: Auto-generated test business description a68qlk
    - text: UTC USD
  - button "Test Salon asymmy Auto-generated test business description asymmy UTC USD":
    - text: Test Salon asymmy
    - paragraph: Auto-generated test business description asymmy
    - text: UTC USD
  - button "Test Salon atz1m3 Auto-generated test business description atz1m3 UTC USD":
    - text: Test Salon atz1m3
    - paragraph: Auto-generated test business description atz1m3
    - text: UTC USD
  - button "Test Salon b76urd Auto-generated test business description b76urd UTC USD":
    - text: Test Salon b76urd
    - paragraph: Auto-generated test business description b76urd
    - text: UTC USD
  - button "Test Salon btnwca Auto-generated test business description btnwca UTC USD":
    - text: Test Salon btnwca
    - paragraph: Auto-generated test business description btnwca
    - text: UTC USD
  - button "Test Salon c0uqdl Auto-generated test business description c0uqdl UTC USD":
    - text: Test Salon c0uqdl
    - paragraph: Auto-generated test business description c0uqdl
    - text: UTC USD
  - button "Test Salon cemiq4 Auto-generated test business description cemiq4 UTC USD":
    - text: Test Salon cemiq4
    - paragraph: Auto-generated test business description cemiq4
    - text: UTC USD
  - button "Test Salon cs0sk6 Auto-generated test business description cs0sk6 UTC USD":
    - text: Test Salon cs0sk6
    - paragraph: Auto-generated test business description cs0sk6
    - text: UTC USD
  - button "Test Salon d2s8sx Auto-generated test business description d2s8sx UTC USD":
    - text: Test Salon d2s8sx
    - paragraph: Auto-generated test business description d2s8sx
    - text: UTC USD
  - button "Test Salon egni33 Auto-generated test business description egni33 UTC USD":
    - text: Test Salon egni33
    - paragraph: Auto-generated test business description egni33
    - text: UTC USD
  - button "Test Salon eog81f Auto-generated test business description eog81f UTC USD":
    - text: Test Salon eog81f
    - paragraph: Auto-generated test business description eog81f
    - text: UTC USD
  - button "Test Salon esyzer Auto-generated test business description esyzer UTC USD":
    - text: Test Salon esyzer
    - paragraph: Auto-generated test business description esyzer
    - text: UTC USD
  - button "Test Salon fnk1tt Auto-generated test business description fnk1tt UTC USD":
    - text: Test Salon fnk1tt
    - paragraph: Auto-generated test business description fnk1tt
    - text: UTC USD
  - button "Test Salon fwgmjd Auto-generated test business description fwgmjd UTC USD":
    - text: Test Salon fwgmjd
    - paragraph: Auto-generated test business description fwgmjd
    - text: UTC USD
  - button "Test Salon gi47ns Auto-generated test business description gi47ns UTC USD":
    - text: Test Salon gi47ns
    - paragraph: Auto-generated test business description gi47ns
    - text: UTC USD
  - button "Test Salon gl6fqe Auto-generated test business description gl6fqe UTC USD":
    - text: Test Salon gl6fqe
    - paragraph: Auto-generated test business description gl6fqe
    - text: UTC USD
  - button "Test Salon gl7ea7 Auto-generated test business description gl7ea7 UTC USD":
    - text: Test Salon gl7ea7
    - paragraph: Auto-generated test business description gl7ea7
    - text: UTC USD
  - button "Test Salon hxzb30 Auto-generated test business description hxzb30 UTC USD":
    - text: Test Salon hxzb30
    - paragraph: Auto-generated test business description hxzb30
    - text: UTC USD
  - button "Test Salon igp24q Auto-generated test business description igp24q UTC USD":
    - text: Test Salon igp24q
    - paragraph: Auto-generated test business description igp24q
    - text: UTC USD
  - button "Test Salon ls8uew Auto-generated test business description ls8uew UTC USD":
    - text: Test Salon ls8uew
    - paragraph: Auto-generated test business description ls8uew
    - text: UTC USD
  - button "Test Salon lxdrvs Auto-generated test business description lxdrvs UTC USD":
    - text: Test Salon lxdrvs
    - paragraph: Auto-generated test business description lxdrvs
    - text: UTC USD
  - button "Test Salon niqqre Auto-generated test business description niqqre UTC USD":
    - text: Test Salon niqqre
    - paragraph: Auto-generated test business description niqqre
    - text: UTC USD
  - button "Test Salon nnnmtw Auto-generated test business description nnnmtw UTC USD":
    - text: Test Salon nnnmtw
    - paragraph: Auto-generated test business description nnnmtw
    - text: UTC USD
  - button "Test Salon nrc7yx Auto-generated test business description nrc7yx UTC USD":
    - text: Test Salon nrc7yx
    - paragraph: Auto-generated test business description nrc7yx
    - text: UTC USD
  - button "Test Salon oeux2s Auto-generated test business description oeux2s UTC USD":
    - text: Test Salon oeux2s
    - paragraph: Auto-generated test business description oeux2s
    - text: UTC USD
  - button "Test Salon orw3o4 Auto-generated test business description orw3o4 UTC USD":
    - text: Test Salon orw3o4
    - paragraph: Auto-generated test business description orw3o4
    - text: UTC USD
  - button "Test Salon ox1a1r Auto-generated test business description ox1a1r UTC USD":
    - text: Test Salon ox1a1r
    - paragraph: Auto-generated test business description ox1a1r
    - text: UTC USD
  - button "Test Salon pyoepe Auto-generated test business description pyoepe UTC USD":
    - text: Test Salon pyoepe
    - paragraph: Auto-generated test business description pyoepe
    - text: UTC USD
  - button "Test Salon qcm18x Auto-generated test business description qcm18x UTC USD":
    - text: Test Salon qcm18x
    - paragraph: Auto-generated test business description qcm18x
    - text: UTC USD
  - button "Test Salon qlbret Auto-generated test business description qlbret UTC USD":
    - text: Test Salon qlbret
    - paragraph: Auto-generated test business description qlbret
    - text: UTC USD
  - button "Test Salon qr0hfk Auto-generated test business description qr0hfk UTC USD":
    - text: Test Salon qr0hfk
    - paragraph: Auto-generated test business description qr0hfk
    - text: UTC USD
  - button "Test Salon r9cxkb Auto-generated test business description r9cxkb UTC USD":
    - text: Test Salon r9cxkb
    - paragraph: Auto-generated test business description r9cxkb
    - text: UTC USD
  - button "Test Salon s7a7st Auto-generated test business description s7a7st UTC USD":
    - text: Test Salon s7a7st
    - paragraph: Auto-generated test business description s7a7st
    - text: UTC USD
  - button "Test Salon sky7cf Auto-generated test business description sky7cf UTC USD":
    - text: Test Salon sky7cf
    - paragraph: Auto-generated test business description sky7cf
    - text: UTC USD
  - button "Test Salon t9wjh7 Auto-generated test business description t9wjh7 UTC USD":
    - text: Test Salon t9wjh7
    - paragraph: Auto-generated test business description t9wjh7
    - text: UTC USD
  - button "Test Salon ta5ce7 Auto-generated test business description ta5ce7 UTC USD":
    - text: Test Salon ta5ce7
    - paragraph: Auto-generated test business description ta5ce7
    - text: UTC USD
  - button "Test Salon u0g7lb Auto-generated test business description u0g7lb UTC USD":
    - text: Test Salon u0g7lb
    - paragraph: Auto-generated test business description u0g7lb
    - text: UTC USD
  - button "Test Salon u8pzhc Auto-generated test business description u8pzhc UTC USD":
    - text: Test Salon u8pzhc
    - paragraph: Auto-generated test business description u8pzhc
    - text: UTC USD
  - button "Test Salon ub3aeu Auto-generated test business description ub3aeu UTC USD":
    - text: Test Salon ub3aeu
    - paragraph: Auto-generated test business description ub3aeu
    - text: UTC USD
  - button "Test Salon ui869c Auto-generated test business description ui869c UTC USD":
    - text: Test Salon ui869c
    - paragraph: Auto-generated test business description ui869c
    - text: UTC USD
  - button "Test Salon vamdvm Auto-generated test business description vamdvm UTC USD":
    - text: Test Salon vamdvm
    - paragraph: Auto-generated test business description vamdvm
    - text: UTC USD
  - button "Test Salon vsxf4h Auto-generated test business description vsxf4h UTC USD":
    - text: Test Salon vsxf4h
    - paragraph: Auto-generated test business description vsxf4h
    - text: UTC USD
  - button "Test Salon wpsv41 Auto-generated test business description wpsv41 UTC USD":
    - text: Test Salon wpsv41
    - paragraph: Auto-generated test business description wpsv41
    - text: UTC USD
  - button "Test Salon wqwz95 Auto-generated test business description wqwz95 UTC USD":
    - text: Test Salon wqwz95
    - paragraph: Auto-generated test business description wqwz95
    - text: UTC USD
  - button "Test Salon x4gtj1 Auto-generated test business description x4gtj1 UTC USD":
    - text: Test Salon x4gtj1
    - paragraph: Auto-generated test business description x4gtj1
    - text: UTC USD
  - button "Test Salon x9lli8 Auto-generated test business description x9lli8 UTC USD":
    - text: Test Salon x9lli8
    - paragraph: Auto-generated test business description x9lli8
    - text: UTC USD
  - button "Test Salon xvqmlv UTC USD"
  - button "Test Salon ztn2hy Auto-generated test business description ztn2hy UTC USD":
    - text: Test Salon ztn2hy
    - paragraph: Auto-generated test business description ztn2hy
    - text: UTC USD
  - button "Zen Spa UTC USD"
  - button "chingcho dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf UTC USD":
    - text: chingcho
    - paragraph: dsfa asd fasdf a df af asd a dsf asdf asd fa sdf asdf asd f asdf asdf asdf
    - text: UTC USD
- contentinfo: Y Yarivo Appointments · yarivo.com © 2026 Yarivo. Global Appointment & Booking Platform.
- alert
```

# Test source

```ts
  1  | /**
  2  |  * Smoke Test: Business Owner Login & Logout Flow (Happy Path)
  3  |  * Verifies successful login using owner credentials and secure logout.
  4  |  */
  5  | 
  6  | const { test, expect } = require('../../fixtures/base-fixture');
  7  | const { generateUniqueBusiness } = require('../../utils/string-helper');
  8  | 
  9  | test.describe('@smoke Business Owner Login & Logout', () => {
  10 |   let registeredOwner;
  11 | 
  12 |   test.beforeEach(async ({ apiClient }) => {
  13 |     registeredOwner = generateUniqueBusiness();
  14 |     const res = await apiClient.registerBusiness(registeredOwner);
  15 |     expect(res.ok).toBeTruthy();
  16 |   });
  17 | 
  18 |   test('should log in successfully with valid owner credentials and logout properly', async ({
  19 |     page,
  20 |     loginPage,
  21 |     dashboardPage,
  22 |   }) => {
  23 |     await test.step('Navigate to login view', async () => {
  24 |       await loginPage.goto('/');
  25 |       await loginPage.clickLoginNav();
  26 |     });
  27 | 
  28 |     await test.step('Submit login credentials', async () => {
  29 |       await loginPage.login(registeredOwner.ownerEmail, registeredOwner.password);
  30 |     });
  31 | 
  32 |     await test.step('Verify navigation to Dashboard', async () => {
  33 |       await expect(dashboardPage.businessTitle).toContainText(registeredOwner.name);
  34 |       await expect(dashboardPage.appointmentsTabBtn).toBeVisible();
  35 |     });
  36 | 
  37 |     await test.step('Perform logout and verify session cleanup', async () => {
  38 |       await dashboardPage.clickLogoutNav();
  39 |       const token = await dashboardPage.getLocalStorageToken();
  40 |       expect(token).toBeNull();
> 41 |       await expect(page.getByRole('button', { name: /📅 Book Appointment/i })).toBeVisible();
     |                                                                                ^ Error: expect(locator).toBeVisible() failed
  42 |     });
  43 |   });
  44 | });
  45 | 
```