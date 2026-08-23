/**
 * Deterministic mock responses for testing API states, error responses, and mock execution mode.
 */

const mockBusinessId = '11111111-2222-3333-4444-555555555555';
const mockServiceId = '22222222-3333-4444-5555-666666666666';
const mockStaffId = '33333333-4444-5555-6666-777777777777';
const mockApptId = '44444444-5555-6666-7777-888888888888';

module.exports = {
  mockBusiness: {
    id: mockBusinessId,
    name: 'Mock Elite Salon',
    slug: 'mock-elite-salon',
    description: 'Premier styling with mock backend',
    email: 'contact@mockelitesalon.test',
    phone: '+1 555-0100',
    address: '100 Mockingbird Lane',
    timezone: 'UTC',
    currency: 'USD',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },

  mockServices: [
    {
      id: mockServiceId,
      business_id: mockBusinessId,
      name: 'Signature Haircut',
      description: 'Full wash, cut, and blow dry',
      duration_minutes: 30,
      price: 50.0,
      currency: 'USD',
      buffer_minutes_before: 0,
      buffer_minutes_after: 5,
      active: true,
    },
    {
      id: '22222222-3333-4444-5555-999999999999',
      business_id: mockBusinessId,
      name: 'Beard Trim & Shape',
      description: 'Hot towel shave and shaping',
      duration_minutes: 20,
      price: 30.0,
      currency: 'USD',
      buffer_minutes_before: 0,
      buffer_minutes_after: 0,
      active: true,
    },
  ],

  mockStaffList: [
    {
      id: mockStaffId,
      business_id: mockBusinessId,
      name: 'Alex Stylist',
      email: 'alex@mockelitesalon.test',
      phone: '+1 555-0101',
      color: '#3B82F6',
      active: true,
    },
  ],

  mockSlots: [
    { start_time: '2026-09-01T09:00:00Z', end_time: '2026-09-01T09:30:00Z', staff_id: mockStaffId },
    { start_time: '2026-09-01T10:00:00Z', end_time: '2026-09-01T10:30:00Z', staff_id: mockStaffId },
    { start_time: '2026-09-01T11:00:00Z', end_time: '2026-09-01T11:30:00Z', staff_id: mockStaffId },
    { start_time: '2026-09-01T14:00:00Z', end_time: '2026-09-01T14:30:00Z', staff_id: mockStaffId },
  ],

  mockAppointment: {
    id: mockApptId,
    business_id: mockBusinessId,
    customer_id: '55555555-6666-7777-8888-999999999999',
    staff_id: mockStaffId,
    service_id: mockServiceId,
    start_time: '2026-09-01T09:00:00Z',
    end_time: '2026-09-01T09:30:00Z',
    status: 'CONFIRMED',
    customer_notes: 'Prefer quiet chair',
    created_at: new Date().toISOString(),
    customer: {
      id: '55555555-6666-7777-8888-999999999999',
      name: 'John Mock',
      email: 'john.mock@example.com',
      phone: '+1 555-0155',
    },
    service: {
      id: mockServiceId,
      name: 'Signature Haircut',
      duration_minutes: 30,
      price: 50.0,
      currency: 'USD',
    },
    staff: {
      id: mockStaffId,
      name: 'Alex Stylist',
      email: 'alex@mockelitesalon.test',
      phone: '+1 555-0101',
    },
  },

  mockBusinessHours: [
    { id: '1', day_of_week: 0, is_open: true, opening_time: '09:00:00', closing_time: '17:00:00' },
    { id: '2', day_of_week: 1, is_open: true, opening_time: '09:00:00', closing_time: '17:00:00' },
    { id: '3', day_of_week: 2, is_open: true, opening_time: '09:00:00', closing_time: '17:00:00' },
    { id: '4', day_of_week: 3, is_open: true, opening_time: '09:00:00', closing_time: '17:00:00' },
    { id: '5', day_of_week: 4, is_open: true, opening_time: '09:00:00', closing_time: '17:00:00' },
    { id: '6', day_of_week: 5, is_open: false, opening_time: null, closing_time: null },
    { id: '7', day_of_week: 6, is_open: false, opening_time: null, closing_time: null },
  ],
};
