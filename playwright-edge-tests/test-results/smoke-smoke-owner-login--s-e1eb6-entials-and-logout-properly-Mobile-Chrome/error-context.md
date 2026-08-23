# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\smoke-owner-login.spec.js >> @smoke Business Owner Login & Logout >> should log in successfully with valid owner credentials and logout properly
- Location: tests\smoke\smoke-owner-login.spec.js:18:3

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('header').getByRole('button', { name: /Logout/i })
    - locator resolved to <button class="px-3.5 py-1.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/50 rounded-lg transition">Logout</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <button class="px-3.5 py-1.5 text-sm font-medium rounded-lg transition bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">Dashboard</button> intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <button class="px-3.5 py-1.5 text-sm font-medium rounded-lg transition bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">Dashboard</button> intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <nav class="flex items-center gap-2">…</nav> intercepts pointer events
  4 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <button class="px-3.5 py-1.5 text-sm font-medium rounded-lg transition bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">Dashboard</button> intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <button class="px-3.5 py-1.5 text-sm font-medium rounded-lg transition bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">Dashboard</button> intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <nav class="flex items-center gap-2">…</nav> intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <nav class="flex items-center gap-2">…</nav> intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <button class="px-3.5 py-1.5 text-sm font-medium rounded-lg transition bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">Dashboard</button> intercepts pointer events
  - retrying click action
    - waiting 500ms

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
          - button "Dashboard" [ref=e14]
          - button "+ New Business" [ref=e15]
          - button "Logout" [ref=e16]
    - main [ref=e17]:
      - generic [ref=e18]:
        - generic [ref=e19]:
          - generic [ref=e20]:
            - generic [ref=e21]:
              - heading "Test Salon 1tz8tl" [level=2] [ref=e22]
              - generic [ref=e23]: Yarivo Appointments
            - paragraph [ref=e24]:
              - generic [ref=e25]: "Public Booking Link:"
              - generic [ref=e26]: yarivo.com/book/test-salon-1tz8tl
          - generic [ref=e27]:
            - button "appointments" [ref=e28]
            - button "services" [ref=e29]
            - button "staff" [ref=e30]
            - button "hours" [ref=e31]
            - button "💳 Plan & Billing" [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]:
              - heading "Yarivo Appointments (0)" [level=3] [ref=e36]
              - paragraph [ref=e37]: Manage all customer appointments, bookings, and statuses.
            - button "🔄 Refresh" [ref=e38]
          - paragraph [ref=e39]: No appointments booked yet.
    - contentinfo [ref=e40]:
      - generic [ref=e41]:
        - generic [ref=e42]:
          - generic [ref=e43]: "Y"
          - generic [ref=e44]: Yarivo Appointments
          - generic [ref=e45]: ·
          - generic [ref=e46]: yarivo.com
        - generic [ref=e47]: © 2026 Yarivo. Global Appointment & Booking Platform.
  - button "Open Next.js Dev Tools" [ref=e53] [cursor=pointer]
  - alert [ref=e57]
```

# Test source

```ts
  1  | /**
  2  |  * BasePage: Core Page Object containing shared locators, navigations, resilient waits, and helpers.
  3  |  */
  4  | 
  5  | const { expect } = require('@playwright/test');
  6  | 
  7  | class BasePage {
  8  |   /**
  9  |    * @param {import('@playwright/test').Page} page
  10 |    */
  11 |   constructor(page) {
  12 |     this.page = page;
  13 | 
  14 |     // Header & Navigation locators scoped to <header>
  15 |     this.header = page.locator('header');
  16 |     this.brandLogo = page.locator('header').getByText('Yarivo');
  17 |     this.navBookBtn = page.locator('header').getByRole('button', { name: /Public Booking/i });
  18 |     this.navRegisterBtn = page.locator('header').getByRole('button', { name: /Register Business/i });
  19 |     this.navLoginBtn = page.locator('header').getByRole('button', { name: /Business Login/i });
  20 |     this.navDashboardBtn = page.locator('header').getByRole('button', { name: /^Dashboard$/i });
  21 |     this.navLogoutBtn = page.locator('header').getByRole('button', { name: /Logout/i });
  22 | 
  23 |     // Global Notification banners
  24 |     this.errorMessageBanner = page.locator('div.border-red-200, div.bg-red-50, div.text-red-700');
  25 |     this.successMessageBanner = page.locator('div.border-emerald-200, div.bg-emerald-50, div.text-emerald-700');
  26 |   }
  27 | 
  28 |   async goto(path = '/') {
  29 |     await this.page.goto(path, { waitUntil: 'domcontentloaded' });
  30 |     await this.page.waitForTimeout(300);
  31 |   }
  32 | 
  33 |   async clickBookNav() {
  34 |     await this.navBookBtn.click();
  35 |     await this.page.waitForTimeout(200);
  36 |   }
  37 | 
  38 |   async clickRegisterNav() {
  39 |     await this.navRegisterBtn.click();
  40 |     await this.page.locator('input[placeholder*="My Salon & Spa" i], input[placeholder*="Salon" i]').first().waitFor({ state: 'visible', timeout: 10000 });
  41 |   }
  42 | 
  43 |   async clickLoginNav() {
  44 |     await this.navLoginBtn.click();
  45 |     await this.page.locator('input[placeholder*="owner@example.com" i]').first().waitFor({ state: 'visible', timeout: 10000 });
  46 |   }
  47 | 
  48 |   async clickDashboardNav() {
  49 |     await this.navDashboardBtn.click();
  50 |     await this.page.waitForTimeout(200);
  51 |   }
  52 | 
  53 |   async clickLogoutNav() {
> 54 |     await this.navLogoutBtn.click();
     |                             ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  55 |     await this.page.waitForTimeout(200);
  56 |   }
  57 | 
  58 |   async expectErrorMessage(textPattern) {
  59 |     await expect(this.errorMessageBanner.first()).toBeVisible({ timeout: 10000 });
  60 |     if (textPattern) {
  61 |       await expect(this.errorMessageBanner.first()).toContainText(textPattern);
  62 |     }
  63 |   }
  64 | 
  65 |   async expectSuccessMessage(textPattern) {
  66 |     await expect(this.successMessageBanner.first()).toBeVisible({ timeout: 10000 });
  67 |     if (textPattern) {
  68 |       await expect(this.successMessageBanner.first()).toContainText(textPattern);
  69 |     }
  70 |   }
  71 | 
  72 |   async getLocalStorageToken() {
  73 |     return this.page.evaluate(() => localStorage.getItem('token'));
  74 |   }
  75 | 
  76 |   async setLocalStorageToken(token) {
  77 |     await this.page.evaluate((t) => localStorage.setItem('token', t), token);
  78 |   }
  79 | 
  80 |   async clearLocalStorage() {
  81 |     await this.page.evaluate(() => localStorage.clear());
  82 |   }
  83 | }
  84 | 
  85 | module.exports = BasePage;
  86 | 
```