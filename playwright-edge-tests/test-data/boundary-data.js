/**
 * Boundary-value test cases: min/max lengths, edge durations, zero prices, boundary dates.
 */

module.exports = {
  nameBoundaries: {
    minValid: 'Al', // Exact minimum 2 chars
    maxStandard: 'A'.repeat(100), // Max standard name 100 chars
    veryLarge: 'A'.repeat(255), // 255 chars
  },

  passwordBoundaries: {
    minValid: '12345678', // Exact min 8 chars
    longValid: 'A'.repeat(128) + '!1a', // Long complex password
  },

  phoneBoundaries: {
    minValidDigits: '5550199', // 7 digits
    maxValidDigits: '+1 (555) 019-98765', // 15 digits
  },

  serviceBoundaries: {
    minDuration: 1, // 1 minute
    maxDuration: 720, // 12 hours (720 min)
    zeroPrice: 0, // Free service (price = 0)
    highPrice: 99999.99,
    zeroBuffer: 0,
    maxBuffer: 120,
  },

  textNotesBoundaries: {
    empty: '',
    singleChar: 'N',
    longNotes: 'Detailed customer request: '.repeat(20), // ~500 chars
    massiveNotes: 'Large note block. '.repeat(100), // ~1800 chars
  },
};
