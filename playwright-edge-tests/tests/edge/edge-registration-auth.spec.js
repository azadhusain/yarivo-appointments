/**
 * Edge Case Test Suite: Business Registration & Owner Auth
 * Tests duplicate email conflicts (409), password length boundaries, invalid currencies, and XSS sanitization.
 */

const { test, expect } = require('../../fixtures/base-fixture');
const { generateUniqueBusiness } = require('../../utils/string-helper');
const { xssPayloads } = require('../../test-data/security-data');

test.describe('@edge Registration & Authentication Edge Cases', () => {
  test('should reject registration when email is already registered (409 Conflict)', async ({
    registerPage,
    apiClient,
  }) => {
    const existingBusiness = generateUniqueBusiness();
    await apiClient.registerBusiness(existingBusiness);

    await registerPage.goto('/');
    await registerPage.clickRegisterNav();

    // Attempt to register with the exact same owner email
    const duplicateBusiness = generateUniqueBusiness();
    duplicateBusiness.ownerEmail = existingBusiness.ownerEmail;

    await registerPage.registerBusiness(duplicateBusiness);
    await registerPage.expectErrorMessage(/already registered|Email already registered/i);
  });

  test('should enforce minimum 8 characters for password', async ({
    registerPage,
  }) => {
    await registerPage.goto('/');
    await registerPage.clickRegisterNav();

    const biz = generateUniqueBusiness();
    biz.password = '1234567'; // 7 chars

    await registerPage.registerBusiness(biz);
    await registerPage.expectFieldError('at least 8 characters');
  });

  test('should reject invalid currency codes', async ({
    registerPage,
  }) => {
    await registerPage.goto('/');
    await registerPage.clickRegisterNav();

    const biz = generateUniqueBusiness();
    biz.currency = 'US'; // 2 chars

    await registerPage.registerBusiness(biz);
    await registerPage.expectFieldError('exactly 3 uppercase letters');
  });

  test('should sanitize XSS payloads safely without script execution', async ({
    page,
    registerPage,
    dashboardPage,
  }) => {
    let alertTriggered = false;
    page.on('dialog', async (dialog) => {
      alertTriggered = true;
      await dialog.dismiss();
    });

    const xssBiz = generateUniqueBusiness();
    xssBiz.name = `Salon ${xssPayloads[0]}`;
    xssBiz.description = xssPayloads[1];

    await registerPage.goto('/');
    await registerPage.clickRegisterNav();
    await registerPage.registerBusiness(xssBiz);

    // Verify alert was never triggered and page loaded cleanly
    expect(alertTriggered).toBeFalsy();
    await expect(dashboardPage.businessTitle).toBeVisible();
  });

  test('should reject invalid login credentials with an error banner', async ({
    loginPage,
  }) => {
    await loginPage.goto('/');
    await loginPage.clickLoginNav();
    await loginPage.login('nonexistent.user@example.com', 'WrongPassword123!');

    await loginPage.expectErrorMessage(/Incorrect email or password/i);
  });
});
