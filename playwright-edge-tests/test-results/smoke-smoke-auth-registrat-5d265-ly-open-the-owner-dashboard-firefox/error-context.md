# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\smoke-auth-registration.spec.js >> @smoke Business Owner Registration >> should register a new business and automatically open the owner dashboard
- Location: tests\smoke\smoke-auth-registration.spec.js:10:3

# Error details

```
TimeoutError: page.goto: Timeout 15000ms exceeded.
Call log:
  - navigating to "http://localhost:3000/", waiting until "domcontentloaded"

```

```
Tearing down "context" exceeded the test timeout of 30000ms.
```