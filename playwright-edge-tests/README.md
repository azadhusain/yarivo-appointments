# Yarivo Appointments - Production Playwright Automation Framework (JavaScript)

An enterprise-grade, production-ready **Playwright + JavaScript** end-to-end and edge-case testing framework designed for the **Yarivo Appointments** multi-tenant SaaS platform.

---

## 🏛 Framework Architecture

```
playwright-edge-tests/
├── .github/
│   └── workflows/
│       └── playwright.yml             # GitHub Actions CI/CD Pipeline
├── config/
│   └── environment.js                 # Environment-specific configuration loader
├── fixtures/
│   ├── base-fixture.js                # Custom fixture with Page Object Model & authenticated context
│   └── mock-api-fixture.js            # Network fault injection & API mocking fixture
├── pages/
│   ├── BasePage.js                    # Shared page utilities, navigation, toasts, waits
│   ├── PublicBookingPage.js           # Customer booking flow (services, slots, datepicker, form)
│   ├── RegisterPage.js                # Business owner registration flow
│   ├── LoginPage.js                   # Owner credentials authentication & logout
│   └── DashboardPage.js               # Owner dashboard (Appointments, Services, Staff, Hours)
├── test-data/
│   ├── valid-data.js                  # Canonical valid entities (business, customer, service)
│   ├── boundary-data.js               # Min/max boundaries, edge dates, single-char boundaries
│   ├── invalid-data.js                # Malformed emails, short passwords, bad currencies
│   ├── security-data.js               # XSS payloads, SQLi strings, Unicode/Emoji
│   └── mock-responses.js              # Deterministic mock responses for isolated testing
├── utils/
│   ├── api-client.js                  # Direct REST API client for fast setup & assertions
│   ├── date-helper.js                 # Date formatting, leap years, and future/past dates
│   └── string-helper.js               # Random unique slug, name, and email generators
├── tests/
│   ├── smoke/                         # Critical business path test suite
│   │   ├── smoke-public-booking.spec.js
│   │   ├── smoke-auth-registration.spec.js
│   │   └── smoke-owner-login.spec.js
│   ├── regression/                    # Core feature regression test suite
│   │   ├── regression-services.spec.js
│   │   ├── regression-staff.spec.js
│   │   ├── regression-appointments.spec.js
│   │   └── regression-business-hours.spec.js
│   └── edge/                          # Complex edge-case and fault injection test suite
│       ├── edge-booking-scenarios.spec.js
│       ├── edge-registration-auth.spec.js
│       ├── edge-deletion-constraints.spec.js
│       ├── edge-network-faults.spec.js
│       └── edge-concurrency-navigation.spec.js
├── playwright.config.js               # Multi-browser configuration, retries, reporters, traces
├── package.json                       # Scripts and dev dependencies
└── README.md                          # Documentation & execution guide
```

---

## 📊 Feature & Edge-Case Coverage Matrix

| Feature Area | Happy Path | Boundary Tests | Negative / Invalid Inputs | Concurrency / Race Conditions | Security & Resilience |
|---|---|---|---|---|---|
| **Public Booking** | ✅ Full booking flow | ✅ Max notes length (~1800 chars) | ✅ Invalid email formats, empty required fields | ✅ Slot conflict (409 Double Booking) | ✅ Unicode/Emoji in customer names, XSS payloads |
| **Business Registration** | ✅ Standard signup with auto-seeding | ✅ Password min 8 chars, currency 3 chars | ✅ Duplicate email (409), malformed emails | ✅ Slug collision auto-suffixing | ✅ Script tag sanitization in business descriptions |
| **Owner Authentication** | ✅ Owner email/password login & logout | ✅ Token refresh lifecycle | ✅ 401 on incorrect credentials | ✅ Concurrent login sessions | ✅ Secure `localStorage` token cleanup on logout |
| **Services Management** | ✅ Create/edit duration, price, buffers | ✅ Min duration (1m), zero price | ✅ Validation error banners | ✅ Deletion blocked with active appointments | ✅ Active/inactive visibility toggle |
| **Staff Management** | ✅ Add/edit staff, contact info | ✅ Min name length (2 chars) | ✅ Invalid email/phone formats | ✅ Deletion blocked with active appointments | ✅ Active/inactive availability toggles |
| **Operating Hours** | ✅ Weekly 7-day schedule | ✅ Midnight boundaries | ✅ Closed day slot exclusion | ✅ Persistence on page reload | ✅ Dynamic public slot recomputation |
| **Network & Resilience** | ✅ Fast loading | ✅ High latency (2000ms+) | ✅ HTTP 500 server crashes | ✅ Double-click disabled button states | ✅ Network offline / abort error handling |

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** >= 18.x
- Backend (FastAPI) and Frontend (Next.js) running locally or configured in `.env`.

### 2. Install Dependencies & Playwright Browsers

```bash
cd playwright-edge-tests
npm install
npx playwright install --with-deps
```

---

## 🧪 Test Execution Commands

### Run Full Test Suite
```bash
npm test
```

### Run by Test Level
```bash
# Smoke Suite
npm run test:smoke

# Regression Suite
npm run test:regression

# Edge-Case Suite
npm run test:edge
```

### Run by Browser / Device Target
```bash
# Chromium (Desktop Chrome / Edge)
npm run test:chromium

# Firefox
npm run test:firefox

# WebKit (Desktop Safari)
npm run test:webkit

# Mobile Emulation (Pixel 5 / iPhone 12)
npm run test:mobile
```

### Interactive UI and Debug Modes
```bash
# Interactive Playwright UI Mode
npm run test:ui

# Headed Execution (Watch browser actions)
npm run test:headed

# Debug Mode (Step-by-step inspector)
npm run test:debug
```

### View HTML Test Report
```bash
npm run report
```

---

## 🛡 Network Fault Injection & Mocking

The framework includes `fixtures/mock-api-fixture.js`, which allows tests to run with simulated network conditions:
- **`simulateHttp500(urlPattern)`**: Simulates backend crashes or database downtime to test UI recovery.
- **`simulateNetworkAbort(urlPattern)`**: Simulates offline/unreachable network drops.
- **`simulateSlowNetwork(urlPattern, delayMs)`**: Simulates 3G / high-latency connections to verify disabled button states and loading spinners.
- **`simulateConflict409(urlPattern, message)`**: Simulates double-booking conflicts.

---

## ⚙️ CI/CD Integration

GitHub Actions workflow is configured in `.github/workflows/playwright.yml`:
- Installs dependencies and headless browsers.
- Runs tests across Chromium, Firefox, WebKit, and Mobile devices.
- Auto-uploads HTML test reports and failure traces on every commit / Pull Request.
