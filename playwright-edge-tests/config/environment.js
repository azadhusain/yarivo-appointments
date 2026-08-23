/**
 * Environment configuration for Playwright Test Framework.
 * Reads environment variables with sensible local defaults.
 */

const ENVIRONMENT = process.env.TEST_ENV || 'local';

const configs = {
  local: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    API_URL: process.env.API_URL || 'http://localhost:8000/api/v1',
  },
  staging: {
    BASE_URL: process.env.BASE_URL || 'https://staging.yarivo.com',
    API_URL: process.env.API_URL || 'https://api.staging.yarivo.com/api/v1',
  },
  production: {
    BASE_URL: process.env.BASE_URL || 'https://yarivo.com',
    API_URL: process.env.API_URL || 'https://api.yarivo.com/api/v1',
  },
};

const currentConfig = configs[ENVIRONMENT] || configs.local;

module.exports = {
  ENVIRONMENT,
  BASE_URL: currentConfig.BASE_URL,
  API_URL: currentConfig.API_URL,
  DEFAULT_TIMEOUT: parseInt(process.env.DEFAULT_TIMEOUT || '10000', 10),
  IS_CI: !!process.env.CI,
};
