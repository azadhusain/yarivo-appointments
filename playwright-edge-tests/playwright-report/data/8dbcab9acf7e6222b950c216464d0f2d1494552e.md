# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression\regression-appointments.spec.js >> @regression Appointment Lifecycle & Status Transitions >> should allow the owner to transition appointment status to Completed
- Location: tests\regression\regression-appointments.spec.js:11:3

# Error details

```
TimeoutError: page.goto: Timeout 15000ms exceeded.
Call log:
  - navigating to "http://localhost:3000/", waiting until "load"

```

```
Tearing down "context" exceeded the test timeout of 30000ms.
```