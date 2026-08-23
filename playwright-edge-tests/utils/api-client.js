/**
 * Direct API Client for backend test data setup, teardown, and REST verification.
 */

const env = require('../config/environment');

class ApiClient {
  constructor(baseUrl = env.API_URL) {
    this.baseUrl = baseUrl;
    this.token = null;
  }

  setToken(token) {
    this.token = token;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
      ...options.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    const contentType = response.headers.get('content-type') || '';
    let data = null;
    if (contentType.includes('application/json')) {
      data = await response.json().catch(() => null);
    } else {
      data = await response.text().catch(() => null);
    }

    return {
      status: response.status,
      ok: response.ok,
      data,
    };
  }

  // --- Auth Endpoints ---
  async registerBusiness(businessData) {
    const res = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        name: businessData.name,
        description: businessData.description || null,
        email: businessData.email || null,
        phone: businessData.phone || null,
        address: businessData.address || null,
        timezone: businessData.timezone || 'UTC',
        currency: businessData.currency || 'USD',
        owner_name: businessData.ownerName,
        owner_email: businessData.ownerEmail,
        password: businessData.password,
      }),
    });
    if (res.ok && res.data?.access_token) {
      this.setToken(res.data.access_token);
    }
    return res;
  }

  async login(username, password) {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);

    const res = await fetch(`${this.baseUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const data = await res.json().catch(() => null);
    if (res.ok && data?.access_token) {
      this.setToken(data.access_token);
    }
    return { status: res.status, ok: res.ok, data };
  }

  async getMyBusiness() {
    return this.request('/business/me');
  }

  // --- Services ---
  async createService(serviceData) {
    return this.request('/services', {
      method: 'POST',
      body: JSON.stringify({
        name: serviceData.name,
        description: serviceData.description || null,
        duration_minutes: serviceData.durationMinutes || 30,
        price: serviceData.price || 50,
        currency: serviceData.currency || 'USD',
        buffer_minutes_before: serviceData.bufferBefore || 0,
        buffer_minutes_after: serviceData.bufferAfter || 0,
        active: serviceData.active ?? true,
      }),
    });
  }

  async listServices() {
    return this.request('/services');
  }

  // --- Staff ---
  async createStaff(staffData) {
    return this.request('/staff', {
      method: 'POST',
      body: JSON.stringify({
        name: staffData.name,
        email: staffData.email || null,
        phone: staffData.phone || null,
        active: staffData.active ?? true,
      }),
    });
  }

  async listStaff() {
    return this.request('/staff');
  }

  // --- Public Booking ---
  async getPublicBusinesses() {
    return this.request('/business/public');
  }

  async getPublicSlots(slug, serviceId, date, staffId = null) {
    let url = `/business/public/${slug}/slots?service_id=${serviceId}&date=${date}`;
    if (staffId) url += `&staff_id=${staffId}`;
    return this.request(url);
  }

  async bookAppointment(slug, bookingData) {
    return this.request(`/business/public/${slug}/book`, {
      method: 'POST',
      body: JSON.stringify({
        customer_name: bookingData.name,
        customer_email: bookingData.email,
        customer_phone: bookingData.phone || null,
        customer_notes: bookingData.notes || null,
        service_id: bookingData.serviceId,
        staff_id: bookingData.staffId || null,
        start_time: bookingData.startTime,
      }),
    });
  }

  // --- Appointments ---
  async listAppointments() {
    return this.request('/appointments');
  }

  async updateAppointmentStatus(appointmentId, status) {
    return this.request(`/appointments/${appointmentId}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  }
}

module.exports = ApiClient;
