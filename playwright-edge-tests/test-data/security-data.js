/**
 * Security, sanitization, XSS, SQLi payloads, and Unicode/special characters test data.
 */

module.exports = {
  xssPayloads: [
    '<script>alert("XSS")</script>',
    '<img src=x onerror=alert(1)>',
    '"><svg/onload=alert(String.fromCharCode(88,83,83))>',
    'javascript:alert(1)',
  ],

  sqlInjectionPayloads: [
    "' OR '1'='1",
    "'; DROP TABLE appointments; --",
    "admin' --",
    "' UNION SELECT null, null, null --",
  ],

  specialAndUnicodeStrings: {
    emojiName: '🌸 Sakura Hair Design ✂️',
    accentsAndUmlauts: 'Hôtel & Spa René François Müller',
    cyrillic: 'Салон Красоты Ярославль',
    arabic: 'صالون الجمال والعناية',
    japanese: '東京ヘアサロン サクラ',
    specialChars: '!@#$%^&*()_+~`|}{[]:;?><,./-=',
    quotedName: 'O\'Connor & "Smith" Barbershop',
    whitespacePadded: '   Clean Haircut Studio   ',
  },
};
