/**
 * String and data generation helper utilities.
 */

function generateRandomString(length = 8) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function generateUniqueBusiness() {
  const suffix = generateRandomString(6);
  return {
    name: `Test Salon ${suffix}`,
    description: `Auto-generated test business description ${suffix}`,
    email: `business_${suffix}@testdomain.io`,
    phone: '+1 555-01' + Math.floor(10 + Math.random() * 89),
    address: `${Math.floor(100 + Math.random() * 900)} Test Ave, Suite ${suffix}`,
    timezone: 'UTC',
    currency: 'USD',
    ownerName: `Owner ${suffix}`,
    ownerEmail: `owner_${suffix}@testdomain.io`,
    password: `Pass_${suffix}!123`,
  };
}

function generateUniqueCustomer() {
  const suffix = generateRandomString(5);
  return {
    name: `Customer ${suffix}`,
    email: `cust_${suffix}@clientdomain.test`,
    phone: '+1 555-02' + Math.floor(10 + Math.random() * 89),
    notes: `Test booking notes for user ${suffix}`,
  };
}

function generateUniqueService() {
  const suffix = generateRandomString(4);
  return {
    name: `Service ${suffix}`,
    description: `Custom service created during automated test ${suffix}`,
    durationMinutes: 30,
    price: 45,
    bufferBefore: 5,
    bufferAfter: 5,
    active: true,
  };
}

function generateUniqueStaff() {
  const suffix = generateRandomString(4);
  return {
    name: `Staff Member ${suffix}`,
    email: `staff_${suffix}@businessdomain.test`,
    phone: '+1 555-03' + Math.floor(10 + Math.random() * 89),
    active: true,
  };
}

module.exports = {
  generateRandomString,
  generateUniqueBusiness,
  generateUniqueCustomer,
  generateUniqueService,
  generateUniqueStaff,
};
