/**
 * Invalid inputs and negative test cases for validation and error handling testing.
 */

module.exports = {
  invalidEmails: [
    'plainaddress',
    '@missingusername.com',
    'username@.com',
    'username@domain..com',
    'spaces in email@domain.com',
    'username@domain,com',
    '',
  ],

  invalidPhones: [
    '123', // Too short (< 7 digits)
    'abcdefghijk', // Non-numeric
    '1234567890123456789012', // Too long (> 15 digits)
    '++1-555--00', // Malformed prefix
  ],

  invalidPasswords: [
    '', // Empty
    '1234567', // 7 chars (below min 8)
    'short', // 5 chars
  ],

  invalidCurrencies: [
    'us', // 2 letters
    'usdt', // 4 letters
    '123', // Numbers
    'eur1', // Alphanumeric
    '', // Empty
  ],

  invalidDurations: [
    0,
    -15,
    -100,
  ],

  invalidPrices: [
    -1,
    -50.0,
  ],

  invalidNames: [
    '', // Empty
    ' ', // Whitespace only
    'A', // 1 char (below min 2)
  ],
};
