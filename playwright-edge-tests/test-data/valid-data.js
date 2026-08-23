/**
 * Reusable canonical valid test datasets for Yarivo Appointments.
 */

module.exports = {
  validBusiness: {
    name: 'Luxe Salon & Spa',
    description: 'Premium organic hair care and spa treatments in downtown.',
    email: 'contact@luxesalon.test',
    phone: '+1 555-0123',
    address: '742 Evergreen Terrace, Suite 100',
    timezone: 'UTC',
    currency: 'USD',
    ownerName: 'Sarah Jenkins',
    ownerEmail: 'sarah.owner@luxesalon.test',
    password: 'SuperSecretPassword123!',
  },

  validCustomer: {
    name: 'Elena Rostova',
    email: 'elena.rostova@example.com',
    phone: '+1 555-0199',
    notes: 'Please note I have sensitive skin, using organic conditioner preferred.',
  },

  validService: {
    name: 'Deluxe Haircut & Styling',
    description: 'Precision cut, wash, and luxury blow-dry styling.',
    durationMinutes: 45,
    price: 65,
    bufferBefore: 5,
    bufferAfter: 10,
    active: true,
  },

  validStaff: {
    name: 'Marcus Vance',
    email: 'marcus.vance@luxesalon.test',
    phone: '+1 555-0188',
    active: true,
  },

  validBusinessHours: [
    { day_of_week: 0, is_open: true, opening_time: '09:00:00', closing_time: '18:00:00' },
    { day_of_week: 1, is_open: true, opening_time: '09:00:00', closing_time: '18:00:00' },
    { day_of_week: 2, is_open: true, opening_time: '09:00:00', closing_time: '18:00:00' },
    { day_of_week: 3, is_open: true, opening_time: '09:00:00', closing_time: '18:00:00' },
    { day_of_week: 4, is_open: true, opening_time: '09:00:00', closing_time: '18:00:00' },
    { day_of_week: 5, is_open: true, opening_time: '10:00:00', closing_time: '16:00:00' },
    { day_of_week: 6, is_open: false, opening_time: null, closing_time: null },
  ],
};
