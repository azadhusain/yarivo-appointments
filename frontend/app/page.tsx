"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1";

type View = "book" | "register" | "login" | "dashboard" | "forgot-password";
type DashboardTab = "appointments" | "services" | "staff" | "hours" | "billing";

interface SubscriptionInfo {
  id?: string;
  business_id: string;
  plan: "free" | "starter" | "pro";
  status: string;
  appointments_used: number;
  appointments_limit: number | null;
  can_book: boolean;
  current_period_end?: string | null;
  price: number;
}

interface TokenPair {
  access_token: string;
  refresh_token: string;
}

interface Business {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
  timezone: string;
  currency: string;
  created_at: string;
  updated_at: string;
}

interface Service {
  id: string;
  business_id: string;
  name: string;
  description: string | null;
  duration_minutes: number;
  price: number;
  currency: string;
  buffer_minutes_before: number;
  buffer_minutes_after: number;
  active: boolean;
}

interface Staff {
  id: string;
  business_id: string;
  name: string;
  email: string | null;
  phone: string | null;
  color: string | null;
  active: boolean;
}

interface BusinessHour {
  id?: string;
  day_of_week: number;
  is_open: boolean;
  opening_time: string | null;
  closing_time: string | null;
}

interface Slot {
  start_time: string;
  end_time: string;
  staff_id: string | null;
}

interface Appointment {
  id: string;
  business_id: string;
  customer_id: string;
  staff_id: string | null;
  service_id: string;
  start_time: string;
  end_time: string;
  status: "CONFIRMED" | "CANCELLED" | "COMPLETED" | "NO_SHOW";
  customer_notes: string | null;
  created_at: string;
  customer?: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
  };
  service?: {
    id: string;
    name: string;
    duration_minutes: number;
    price: number;
    currency: string;
  };
  staff?: {
    id: string;
    name: string;
    email: string | null;
    phone: string | null;
  };
}

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const INITIAL_REG_FORM = {
  name: "",
  description: "",
  email: "",
  phone: "",
  address: "",
  timezone: "UTC",
  currency: "USD",
  owner_name: "",
  owner_email: "",
  password: "",
};

// Validation Helpers
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9\s\-().]{7,20}$/;

function validateEmail(email: string, fieldName = "Email"): string | null {
  const trimmed = email.trim();
  if (!trimmed) return `${fieldName} is required`;
  if (!EMAIL_REGEX.test(trimmed)) return `Please enter a valid email address (e.g. name@example.com)`;
  return null;
}

function validateOptionalEmail(email: string): string | null {
  const trimmed = email.trim();
  if (!trimmed) return null;
  if (!EMAIL_REGEX.test(trimmed)) return "Please enter a valid email format";
  return null;
}

function validatePhone(phone: string, required = false): string | null {
  const trimmed = phone.trim();
  if (!trimmed) {
    return required ? "Mobile / phone number is required" : null;
  }
  const digitsOnly = trimmed.replace(/\D/g, "");
  if (!PHONE_REGEX.test(trimmed) || digitsOnly.length < 7 || digitsOnly.length > 15) {
    return "Please enter a valid phone number (7-15 digits, e.g. +1 555-0199)";
  }
  return null;
}

function validateRequiredText(val: string, fieldName: string, minLen = 2): string | null {
  const trimmed = val.trim();
  if (!trimmed) return `${fieldName} is required`;
  if (trimmed.length < minLen) return `${fieldName} must be at least ${minLen} characters`;
  return null;
}

function validatePassword(pass: string): string | null {
  if (!pass) return "Password is required";
  if (pass.length < 8) return "Password must be at least 8 characters long";
  if (!/[A-Z]/.test(pass)) return "Password must contain at least one uppercase letter (A-Z)";
  if (!/[a-z]/.test(pass)) return "Password must contain at least one lowercase letter (a-z)";
  if (!/\d/.test(pass)) return "Password must contain at least one number (0-9)";
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
    return "Password must contain at least one special character (!@#$%^&*...)";
  }
  return null;
}

function validateCurrency(cur: string): string | null {
  const trimmed = cur.trim().toUpperCase();
  if (!trimmed) return "Currency is required (e.g. USD, EUR)";
  if (!/^[A-Z]{3}$/.test(trimmed)) return "Currency must be exactly 3 uppercase letters (e.g. USD, EUR, GBP)";
  return null;
}

function getInputCls(hasError?: boolean) {
  return `w-full rounded-xl border ${
    hasError
      ? "border-red-500 dark:border-red-500 focus:ring-2 focus:ring-red-500 bg-red-50/20 dark:bg-red-950/20"
      : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100"
  } px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none transition`;
}

function FieldError({ error }: { error?: string }) {
  if (!error) return null;
  return (
    <p className="text-xs text-red-600 dark:text-red-400 mt-1 flex items-center gap-1 font-medium">
      <span>⚠️</span> {error}
    </p>
  );
}

function CustomDatePicker({
  value,
  min,
  onChange,
}: {
  value: string;
  min?: string;
  onChange: (val: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const parsedVal = value ? new Date(value + "T00:00:00") : new Date();
  const [viewDate, setViewDate] = useState<Date>(parsedVal);

  useEffect(() => {
    if (value) {
      setViewDate(new Date(value + "T00:00:00"));
    }
  }, [value]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7; // Monday = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthName = viewDate.toLocaleString("default", { month: "long" });

  const prevMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const todayStr = min || new Date().toISOString().split("T")[0];

  const formattedSelected = value
    ? new Date(value + "T00:00:00").toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Select date";

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 flex items-center justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 cursor-pointer shadow-sm"
      >
        <span className="flex items-center gap-2">
          <span>📅</span>
          <span className="font-medium">{formattedSelected}</span>
        </span>
        <span className="text-xs text-zinc-400 font-bold">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-50 w-72 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl space-y-3">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={prevMonth}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition text-sm font-bold"
            >
              ‹
            </button>
            <span className="font-semibold text-sm">
              {monthName} {year}
            </span>
            <button
              type="button"
              onClick={nextMonth}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition text-sm font-bold"
            >
              ›
            </button>
          </div>

          <div className="grid grid-cols-7 text-center text-[11px] font-semibold text-zinc-400">
            <span>Mo</span>
            <span>Tu</span>
            <span>We</span>
            <span>Th</span>
            <span>Fr</span>
            <span>Sa</span>
            <span>Su</span>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            {Array.from({ length: firstDayIndex }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const dayNum = i + 1;
              const monthStr = String(month + 1).padStart(2, "0");
              const dayStr = String(dayNum).padStart(2, "0");
              const dateKey = `${year}-${monthStr}-${dayStr}`;

              const isPast = min ? dateKey < min : dateKey < todayStr;
              const isSelected = dateKey === value;

              return (
                <button
                  key={dateKey}
                  type="button"
                  disabled={isPast}
                  onClick={() => {
                    onChange(dateKey);
                    setIsOpen(false);
                  }}
                  className={`h-8 w-8 mx-auto rounded-lg flex items-center justify-center transition font-medium ${
                    isSelected
                      ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold shadow-sm"
                      : isPast
                      ? "text-zinc-300 dark:text-zinc-700 cursor-not-allowed"
                      : "text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  {dayNum}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

const labelCls = "block text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5";
const btnPrimary =
  "inline-flex items-center justify-center rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-5 py-2.5 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed";
const btnSecondary =
  "inline-flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 px-4 py-2 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition";
const errorCls =
  "mb-4 rounded-xl border border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-950/50 text-red-700 dark:text-red-300 px-4 py-3 text-sm flex items-center gap-2";
const successCls =
  "mb-4 rounded-xl border border-emerald-200 bg-emerald-50 dark:border-emerald-900/50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 px-4 py-3 text-sm flex items-center gap-2";

class ApiNetworkError extends Error {
  constructor() {
    super("Unable to reach the backend server");
    this.name = "ApiNetworkError";
  }
}

interface ApiOptions extends RequestInit {
  silentAuth?: boolean;
}

async function api<T>(path: string, options?: ApiOptions): Promise<T> {
  const method = options?.method ?? "GET";
  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, options);
  } catch {
    throw new ApiNetworkError();
  }
  if (!res.ok) {
    if (res.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
      if (options?.silentAuth) {
        return null as unknown as T;
      }
    }
    const body = await res.json().catch(() => ({}));
    let detail: string;
    if (typeof body.detail === "string") {
      detail = body.detail;
    } else if (Array.isArray(body.detail)) {
      detail = body.detail.map((err: { msg?: string }) => err.msg ?? "Invalid input").join(", ");
    } else {
      detail = res.status === 404 ? "Not found" : `Request failed (${res.status})`;
    }
    throw new Error(detail);
  }
  if (res.status === 204) {
    return {} as T;
  }
  return (await res.json()) as T;
}

export default function App() {
  const [view, setView] = useState<View>("book");
  const [dashTab, setDashTab] = useState<DashboardTab>("appointments");

  // Auth State
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [myBusiness, setMyBusiness] = useState<Business | null>(null);

  // Public Booking State
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loadingBusinesses, setLoadingBusinesses] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [staffMembers, setStaffMembers] = useState<Staff[]>([]);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedStaff, setSelectedStaff] = useState<string>("");
  const [date, setDate] = useState<string>(new Date().toISOString().split("T")[0]);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);

  // Customer booking form
  const [custName, setCustName] = useState("");
  const [custEmail, setCustEmail] = useState("");
  const [custPhone, setCustPhone] = useState("");
  const [custNotes, setCustNotes] = useState("");
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState<Appointment | null>(null);
  const [bookingErrors, setBookingErrors] = useState<Record<string, string>>({});

  // Notifications
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Register Form
  const [regForm, setRegForm] = useState(INITIAL_REG_FORM);
  const [registering, setRegistering] = useState(false);
  const [regErrors, setRegErrors] = useState<Record<string, string>>({});

  // Login Form
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [loginErrors, setLoginErrors] = useState<Record<string, string>>({});

  // Dashboard Data State
  const [dashAppointments, setDashAppointments] = useState<Appointment[]>([]);
  const [dashServices, setDashServices] = useState<Service[]>([]);
  const [dashStaff, setDashStaff] = useState<Staff[]>([]);
  const [dashHours, setDashHours] = useState<BusinessHour[]>([]);
  const [subscription, setSubscription] = useState<SubscriptionInfo | null>(null);
  const [loadingDash, setLoadingDash] = useState(false);

  // Billing & Subscription Upgrade State
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedUpgradePlan, setSelectedUpgradePlan] = useState<"starter" | "pro">("starter");
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [upgradingSub, setUpgradingSub] = useState(false);
  const [paymentErrors, setPaymentErrors] = useState<Record<string, string>>({});

  // Forgot Password State
  const [forgotEmail, setForgotEmail] = useState("");
  const [resetNewPass, setResetNewPass] = useState("");
  const [resetConfirmPass, setResetConfirmPass] = useState("");
  const [resetting, setResetting] = useState(false);
  const [resetErrors, setResetErrors] = useState<Record<string, string>>({});

  // Service Form & Edit State
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
  const [newServiceName, setNewServiceName] = useState("");
  const [newServiceDesc, setNewServiceDesc] = useState("");
  const [newServiceDuration, setNewServiceDuration] = useState(30);
  const [newServicePrice, setNewServicePrice] = useState(40);
  const [newServiceBufBefore, setNewServiceBufBefore] = useState(0);
  const [newServiceBufAfter, setNewServiceBufAfter] = useState(5);
  const [newServiceActive, setNewServiceActive] = useState(true);
  const [savingService, setSavingService] = useState(false);
  const [serviceErrors, setServiceErrors] = useState<Record<string, string>>({});

  // Staff Form State
  const [editingStaffId, setEditingStaffId] = useState<string | null>(null);
  const [newStaffName, setNewStaffName] = useState("");
  const [newStaffEmail, setNewStaffEmail] = useState("");
  const [newStaffPhone, setNewStaffPhone] = useState("");
  const [newStaffActive, setNewStaffActive] = useState(true);
  const [savingStaff, setSavingStaff] = useState(false);
  const [staffErrors, setStaffErrors] = useState<Record<string, string>>({});

  const initialLoadRef = useRef(false);

  // Load public businesses on startup & check saved token
  useEffect(() => {
    if (initialLoadRef.current) return;
    initialLoadRef.current = true;

    loadPublicBusinesses();

    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setAccessToken(savedToken);
      loadDashboardData(savedToken);
    }
  }, []);

  async function loadPublicBusinesses() {
    setLoadingBusinesses(true);
    try {
      const list = await api<Business[]>("/business/public");
      setBusinesses(list);
    } catch {
      setBusinesses([]);
    } finally {
      setLoadingBusinesses(false);
    }
  }

  async function selectBusiness(b: Business) {
    setSelectedBusiness(b);
    setSelectedService("");
    setSelectedStaff("");
    setSelectedSlot(null);
    setSlots([]);
    setBookingSuccess(null);
    setErrorMsg("");
    setBookingErrors({});

    try {
      const sList = await api<Service[]>(`/business/public/${b.slug}/services`);
      setServices(sList);
      if (sList && sList.length > 0) {
        setSelectedService(sList[0].id);
        fetchAvailableSlots(sList[0].id, "", date, b.slug);
      }
      const stList = await api<Staff[]>(`/business/public/${b.slug}/staff`).catch(() => []);
      setStaffMembers(stList);
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "Failed to load business details");
    }
  }

  async function fetchAvailableSlots(
    serviceId = selectedService,
    staffId = selectedStaff,
    slotDate = date,
    bizSlug?: string
  ) {
    const slug = bizSlug || selectedBusiness?.slug;
    if (!slug || !serviceId || !slotDate) return;
    setLoadingSlots(true);
    setErrorMsg("");
    try {
      let url = `/business/public/${slug}/slots?service_id=${serviceId}&date=${slotDate}`;
      if (staffId) {
        url += `&staff_id=${staffId}`;
      }
      const data = await api<Slot[]>(url);
      setSlots(data);
      setSelectedSlot(null);
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "Failed to fetch slots");
      setSlots([]);
    } finally {
      setLoadingSlots(false);
    }
  }

  // Handle Public Booking (No Auth Required)
  async function handlePublicBooking(e: FormEvent) {
    e.preventDefault();

    const errors: Record<string, string> = {};
    const nameErr = validateRequiredText(custName, "Your name", 2);
    if (nameErr) errors.custName = nameErr;

    const emailErr = validateEmail(custEmail, "Email address");
    if (emailErr) errors.custEmail = emailErr;

    const phoneErr = validatePhone(custPhone, false);
    if (phoneErr) errors.custPhone = phoneErr;

    if (!selectedSlot) {
      errors.slot = "Please choose an appointment time slot above.";
    }

    if (Object.keys(errors).length > 0) {
      setBookingErrors(errors);
      return;
    }
    setBookingErrors({});

    if (!selectedBusiness || !selectedService || !selectedSlot) return;

    setBookingLoading(true);
    setErrorMsg("");
    try {
      const appt = await api<Appointment>(`/business/public/${selectedBusiness.slug}/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: custName.trim(),
          customer_email: custEmail.trim().toLowerCase(),
          customer_phone: custPhone.trim() || null,
          customer_notes: custNotes.trim() || null,
          service_id: selectedService,
          staff_id: selectedSlot.staff_id,
          start_time: selectedSlot.start_time,
        }),
      });
      setBookingSuccess(appt);
      setCustName("");
      setCustEmail("");
      setCustPhone("");
      setCustNotes("");
      setSelectedSlot(null);
      fetchAvailableSlots();
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "Booking failed");
    } finally {
      setBookingLoading(false);
    }
  }

  // Navigation Helpers
  function openRegisterView() {
    setErrorMsg("");
    setSuccessMsg("");
    setRegErrors({});
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
    setRegForm({ ...INITIAL_REG_FORM, timezone: localTz });
    setView("register");
  }

  function openLoginView() {
    setErrorMsg("");
    setSuccessMsg("");
    setLoginErrors({});
    setLoginPassword("");
    setView("login");
  }

  // Registration
  async function handleRegister(e: FormEvent) {
    e.preventDefault();

    const errors: Record<string, string> = {};

    const nameErr = validateRequiredText(regForm.name, "Business name", 2);
    if (nameErr) errors.name = nameErr;

    const bizEmailErr = validateOptionalEmail(regForm.email);
    if (bizEmailErr) errors.email = bizEmailErr;

    const phoneErr = validatePhone(regForm.phone, false);
    if (phoneErr) errors.phone = phoneErr;

    const curErr = validateCurrency(regForm.currency);
    if (curErr) errors.currency = curErr;

    const ownerNameErr = validateRequiredText(regForm.owner_name, "Owner name", 2);
    if (ownerNameErr) errors.owner_name = ownerNameErr;

    const ownerEmailErr = validateEmail(regForm.owner_email, "Owner login email");
    if (ownerEmailErr) errors.owner_email = ownerEmailErr;

    const passErr = validatePassword(regForm.password);
    if (passErr) errors.password = passErr;

    if (Object.keys(errors).length > 0) {
      setRegErrors(errors);
      return;
    }
    setRegErrors({});

    setRegistering(true);
    setErrorMsg("");
    setSuccessMsg("");
    try {
      const tokens = await api<TokenPair>("/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: regForm.name.trim(),
          description: regForm.description.trim() || null,
          email: regForm.email.trim().toLowerCase() || null,
          phone: regForm.phone.trim() || null,
          address: regForm.address.trim() || null,
          timezone: regForm.timezone.trim(),
          currency: regForm.currency.trim().toUpperCase(),
          owner_name: regForm.owner_name.trim(),
          owner_email: regForm.owner_email.trim().toLowerCase(),
          password: regForm.password,
        }),
      });

      setAccessToken(tokens.access_token);
      localStorage.setItem("token", tokens.access_token);
      setSuccessMsg("Registration successful! Welcome to your dashboard.");
      setRegForm(INITIAL_REG_FORM);
      await loadDashboardData(tokens.access_token);
      await loadPublicBusinesses();
      setView("dashboard");
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "Registration failed");
    } finally {
      setRegistering(false);
    }
  }

  // Login
  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    const errors: Record<string, string> = {};
    if (!loginEmail.trim()) {
      errors.loginEmail = "Please enter your email or business identifier";
    }
    if (!loginPassword) {
      errors.loginPassword = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
      setLoginErrors(errors);
      return;
    }
    setLoginErrors({});

    setLoggingIn(true);
    setErrorMsg("");
    setSuccessMsg("");
    try {
      const body = new URLSearchParams();
      body.append("username", loginEmail.trim().toLowerCase());
      body.append("password", loginPassword);

      const tokens = await api<TokenPair>("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      setAccessToken(tokens.access_token);
      localStorage.setItem("token", tokens.access_token);
      await loadDashboardData(tokens.access_token);
      setView("dashboard");
      setLoginEmail("");
      setLoginPassword("");
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Incorrect email or password.";
      if (msg.includes("PASSWORD_EXPIRED") || msg.includes("expired")) {
        setForgotEmail(loginEmail.trim().toLowerCase());
        setErrorMsg("⚠️ Your password has expired (over 90 days). Please choose a new password to proceed.");
        setView("forgot-password");
      } else {
        setErrorMsg(msg);
      }
    } finally {
      setLoggingIn(false);
    }
  }

  function handleLogout() {
    setAccessToken(null);
    setMyBusiness(null);
    localStorage.removeItem("token");
    setErrorMsg("");
    setSuccessMsg("");
    setView("book");
  }

  // Dashboard Data Fetcher
  async function loadDashboardData(token = accessToken) {
    if (!token) return;
    setLoadingDash(true);
    const headers = { Authorization: `Bearer ${token}` };
    try {
      const biz = await api<Business | null>("/business/me", { headers, silentAuth: true });
      if (!biz) {
        setAccessToken(null);
        setMyBusiness(null);
        if (typeof window !== "undefined") {
          localStorage.removeItem("token");
        }
        setView("book");
        return;
      }
      setMyBusiness(biz);

      const [appts, srvs, stf, hrs, sub] = await Promise.all([
        api<Appointment[]>("/appointments", { headers, silentAuth: true }).catch(() => []),
        api<Service[]>("/services", { headers, silentAuth: true }).catch(() => []),
        api<Staff[]>("/staff", { headers, silentAuth: true }).catch(() => []),
        api<BusinessHour[]>("/business-hours", { headers, silentAuth: true }).catch(() => []),
        api<SubscriptionInfo>("/billing/subscription", { headers, silentAuth: true }).catch(() => null),
      ]);

      setDashAppointments(appts ?? []);
      setDashServices(srvs ?? []);
      setDashStaff(stf ?? []);
      if (sub) setSubscription(sub);

      if (!hrs || hrs.length === 0) {
        setDashHours(
          DAYS_OF_WEEK.map((_, idx) => ({
            day_of_week: idx,
            is_open: idx < 5,
            opening_time: "09:00:00",
            closing_time: "17:00:00",
          }))
        );
      } else {
        setDashHours(hrs);
      }
    } catch (e) {
      setAccessToken(null);
      setMyBusiness(null);
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
      setView("book");
    } finally {
      setLoadingDash(false);
    }
  }

  // Handle Forgot / Reset Password
  async function handleResetPassword(e: FormEvent) {
    e.preventDefault();
    const errors: Record<string, string> = {};

    const emailErr = validateEmail(forgotEmail, "Account email");
    if (emailErr) errors.email = emailErr;

    const passErr = validatePassword(resetNewPass);
    if (passErr) {
      errors.newPass = passErr;
    }

    if (resetNewPass !== resetConfirmPass) {
      errors.confirmPass = "Passwords do not match";
    }

    if (Object.keys(errors).length > 0) {
      setResetErrors(errors);
      return;
    }
    setResetErrors({});

    setResetting(true);
    setErrorMsg("");
    setSuccessMsg("");
    try {
      const res = await api<{ message: string }>("/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: forgotEmail.trim().toLowerCase(),
          new_password: resetNewPass,
        }),
      });
      setSuccessMsg(res.message || "Password updated successfully. You can now log in.");
      setForgotEmail("");
      setResetNewPass("");
      setResetConfirmPass("");
      setView("login");
    } catch (e) {
      const errorText = e instanceof Error ? e.message : "Failed to reset password";
      setErrorMsg(errorText);
      if (errorText.toLowerCase().includes("last 3 passwords") || errorText.toLowerCase().includes("reuse")) {
        setResetErrors({ newPass: errorText });
      }
    } finally {
      setResetting(false);
    }
  }

  // Handle Subscription Upgrade
  async function handleUpgradeSubscription(e: FormEvent) {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!cardholderName.trim()) {
      errors.name = "Cardholder name is required";
    }
    const cleanNum = cardNumber.replace(/\s+/g, "");
    if (!cleanNum || cleanNum.length < 13 || cleanNum.length > 19) {
      errors.card = "Please enter a valid card number (13-19 digits)";
    }
    if (!cardExp.trim()) {
      errors.exp = "Expiry date required (MM/YY)";
    }
    if (!cardCvc.trim() || cardCvc.length < 3) {
      errors.cvc = "Valid 3-4 digit CVC required";
    }

    if (Object.keys(errors).length > 0) {
      setPaymentErrors(errors);
      return;
    }
    setPaymentErrors({});

    if (!accessToken) return;
    setUpgradingSub(true);
    setErrorMsg("");
    try {
      const planPrice = selectedUpgradePlan === "pro" ? 29 : 9;
      const planLabel = selectedUpgradePlan === "pro" ? "Pro" : "Starter";
      const updatedSub = await api<SubscriptionInfo>("/billing/upgrade", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          plan: selectedUpgradePlan,
          cardholder_name: cardholderName.trim(),
          card_number: cleanNum,
          exp_month: cardExp.split("/")[0] || "12",
          exp_year: cardExp.split("/")[1] || "28",
          cvc: cardCvc.trim(),
        }),
      });
      setSubscription(updatedSub);
      setShowUpgradeModal(false);
      setSuccessMsg(`🎉 Successfully upgraded to the ${planLabel} Plan ($${planPrice}/mo)!`);
      setCardNumber("");
      setCardExp("");
      setCardCvc("");
      setCardholderName("");
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "Upgrade failed");
    } finally {
      setUpgradingSub(false);
    }
  }

  // Handle Cancel / Downgrade Subscription
  async function handleCancelSubscription() {
    if (!accessToken) return;
    if (!confirm("Are you sure you want to downgrade back to the Free plan (15 appointments limit)? You can upgrade again anytime.")) return;
    try {
      const updatedSub = await api<SubscriptionInfo>("/billing/cancel", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setSubscription(updatedSub);
      setSuccessMsg("Subscription downgraded to Free Tier.");
    } catch (e) {
      alert(e instanceof Error ? e.message : "Failed to cancel subscription");
    }
  }

  // Status Updater
  async function updateAppointmentStatus(apptId: string, newStatus: string) {
    if (!accessToken) return;
    try {
      await api(`/appointments/${apptId}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });
      loadDashboardData();
    } catch (e) {
      alert(e instanceof Error ? e.message : "Failed to update status");
    }
  }

  // Service Edit / Create Handlers
  function startEditService(s: Service) {
    setEditingServiceId(s.id);
    setNewServiceName(s.name);
    setNewServiceDesc(s.description ?? "");
    setNewServiceDuration(s.duration_minutes);
    setNewServicePrice(s.price);
    setNewServiceBufBefore(s.buffer_minutes_before);
    setNewServiceBufAfter(s.buffer_minutes_after);
    setNewServiceActive(s.active);
    setServiceErrors({});
  }

  function cancelEditService() {
    setEditingServiceId(null);
    setNewServiceName("");
    setNewServiceDesc("");
    setNewServiceDuration(30);
    setNewServicePrice(40);
    setNewServiceBufBefore(0);
    setNewServiceBufAfter(5);
    setNewServiceActive(true);
    setServiceErrors({});
  }

  async function handleSaveService(e: FormEvent) {
    e.preventDefault();

    const errors: Record<string, string> = {};
    const nameErr = validateRequiredText(newServiceName, "Service name", 2);
    if (nameErr) errors.name = nameErr;

    if (newServiceDuration <= 0) {
      errors.duration = "Duration must be greater than 0 minutes";
    }
    if (newServicePrice < 0) {
      errors.price = "Price cannot be negative";
    }
    if (newServiceBufBefore < 0) {
      errors.bufBefore = "Prep buffer cannot be negative";
    }
    if (newServiceBufAfter < 0) {
      errors.bufAfter = "Cleanup buffer cannot be negative";
    }

    if (Object.keys(errors).length > 0) {
      setServiceErrors(errors);
      return;
    }
    setServiceErrors({});

    if (!accessToken) return;
    setSavingService(true);
    try {
      if (editingServiceId) {
        await api(`/services/${editingServiceId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            name: newServiceName.trim(),
            description: newServiceDesc.trim() || null,
            duration_minutes: Number(newServiceDuration),
            price: Number(newServicePrice),
            buffer_minutes_before: Number(newServiceBufBefore),
            buffer_minutes_after: Number(newServiceBufAfter),
            active: newServiceActive,
          }),
        });
        cancelEditService();
      } else {
        await api("/services", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            name: newServiceName.trim(),
            description: newServiceDesc.trim() || null,
            duration_minutes: Number(newServiceDuration),
            price: Number(newServicePrice),
            currency: myBusiness?.currency || "USD",
            buffer_minutes_before: Number(newServiceBufBefore),
            buffer_minutes_after: Number(newServiceBufAfter),
            active: newServiceActive,
          }),
        });
        cancelEditService();
      }
      loadDashboardData();
      loadPublicBusinesses();
    } catch (e) {
      alert(e instanceof Error ? e.message : "Failed to save service");
    } finally {
      setSavingService(false);
    }
  }

  async function handleDeleteService(serviceId: string, serviceName: string) {
    if (!accessToken) return;
    if (!confirm(`Are you sure you want to remove the service "${serviceName}"?`)) return;
    try {
      await api(`/services/${serviceId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (editingServiceId === serviceId) {
        cancelEditService();
      }
      loadDashboardData();
      loadPublicBusinesses();
    } catch (e) {
      alert(e instanceof Error ? e.message : "Failed to delete service");
    }
  }

  // Staff Edit / Create Handlers
  function startEditStaff(st: Staff) {
    setEditingStaffId(st.id);
    setNewStaffName(st.name);
    setNewStaffEmail(st.email ?? "");
    setNewStaffPhone(st.phone ?? "");
    setNewStaffActive(st.active);
    setStaffErrors({});
  }

  function cancelEditStaff() {
    setEditingStaffId(null);
    setNewStaffName("");
    setNewStaffEmail("");
    setNewStaffPhone("");
    setNewStaffActive(true);
    setStaffErrors({});
  }

  async function handleSaveStaff(e: FormEvent) {
    e.preventDefault();

    const errors: Record<string, string> = {};
    const nameErr = validateRequiredText(newStaffName, "Staff name", 2);
    if (nameErr) errors.name = nameErr;

    const emailErr = validateOptionalEmail(newStaffEmail);
    if (emailErr) errors.email = emailErr;

    const phoneErr = validatePhone(newStaffPhone, false);
    if (phoneErr) errors.phone = phoneErr;

    if (Object.keys(errors).length > 0) {
      setStaffErrors(errors);
      return;
    }
    setStaffErrors({});

    if (!accessToken) return;
    setSavingStaff(true);
    try {
      if (editingStaffId) {
        await api(`/staff/${editingStaffId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            name: newStaffName.trim(),
            email: newStaffEmail.trim().toLowerCase() || null,
            phone: newStaffPhone.trim() || null,
            active: newStaffActive,
          }),
        });
        cancelEditStaff();
      } else {
        const st = await api<Staff>("/staff", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            name: newStaffName.trim(),
            email: newStaffEmail.trim().toLowerCase() || null,
            phone: newStaffPhone.trim() || null,
          }),
        });

        // Default Monday-Friday availability for new staff
        await api(`/staff/${st.id}/availability`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(
            DAYS_OF_WEEK.map((_, idx) => ({
              day_of_week: idx,
              is_available: idx < 5,
              start_time: "09:00:00",
              end_time: "17:00:00",
            }))
          ),
        });

        cancelEditStaff();
      }

      loadDashboardData();
      loadPublicBusinesses();
    } catch (e) {
      alert(e instanceof Error ? e.message : "Failed to save staff member");
    } finally {
      setSavingStaff(false);
    }
  }

  async function handleDeleteStaff(staffId: string, staffName: string) {
    if (!accessToken) return;
    if (!confirm(`Are you sure you want to remove staff member "${staffName}"?`)) return;
    try {
      await api(`/staff/${staffId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (editingStaffId === staffId) {
        cancelEditStaff();
      }
      loadDashboardData();
      loadPublicBusinesses();
    } catch (e) {
      alert(e instanceof Error ? e.message : "Failed to delete staff member");
    }
  }

  // Save Business Hours
  async function handleSaveHours() {
    if (!accessToken) return;
    try {
      await api("/business-hours", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(dashHours),
      });
      alert("Business hours saved successfully!");
      loadDashboardData();
    } catch (e) {
      alert(e instanceof Error ? e.message : "Failed to save hours");
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView("book")}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-300 flex items-center justify-center text-white dark:text-zinc-900 font-black text-base shadow-sm">
              Y
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base tracking-tight leading-tight">Yarivo</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 font-semibold uppercase tracking-wider">
                  Global
                </span>
              </div>
              <span className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider -mt-0.5">Appointments</span>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <button
              onClick={() => setView("book")}
              className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition ${
                view === "book"
                  ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              Public Booking
            </button>

            {accessToken ? (
              <>
                <button
                  onClick={() => {
                    setView("dashboard");
                    loadDashboardData();
                  }}
                  className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition ${
                    view === "dashboard"
                      ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={openRegisterView}
                  className="px-3.5 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-lg transition"
                >
                  + New Business
                </button>
                <button
                  onClick={handleLogout}
                  className="px-3.5 py-1.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/50 rounded-lg transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={openLoginView}
                  className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition ${
                    view === "login"
                      ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                  }`}
                >
                  Business Login
                </button>
                <button onClick={openRegisterView} className={btnPrimary}>
                  Register Business
                </button>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {errorMsg && (
          <div className={errorCls}>
            <span>⚠️</span> {errorMsg}
          </div>
        )}
        {successMsg && (
          <div className={successCls}>
            <span>✅</span> {successMsg}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 1: PUBLIC BOOKING FLOW (NO AUTH NEEDED)                              */}
        {/* ========================================================================= */}
        {view === "book" && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Book an Appointment</h1>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                Select a business, choose your service, pick a date, and reserve your slot instantly.
              </p>
            </div>

            {/* Step 1: Select Business */}
            <div className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">1. Select Business</h2>
              {loadingBusinesses ? (
                <div className="p-8 text-center text-sm text-zinc-500">Loading businesses...</div>
              ) : businesses.length === 0 ? (
                <div className="p-8 border border-dashed border-zinc-300 dark:border-zinc-800 rounded-2xl text-center space-y-3">
                  <p className="text-zinc-500 text-sm">No businesses found yet.</p>
                  <button onClick={openRegisterView} className={btnPrimary}>
                    Register First Business
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {businesses.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => selectBusiness(b)}
                      className={`p-4 rounded-2xl border text-left transition ${
                        selectedBusiness?.id === b.id
                          ? "border-zinc-900 dark:border-zinc-100 bg-zinc-900/5 dark:bg-zinc-100/10 shadow-sm"
                          : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700"
                      }`}
                    >
                      <div className="font-semibold text-base">{b.name}</div>
                      {b.description && (
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">{b.description}</p>
                      )}
                      <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
                        <span>{b.timezone}</span>
                        <span>{b.currency}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Step 2: Choose Service & Date & Staff */}
            {selectedBusiness && (
              <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-6 shadow-sm">
                <div>
                  <h3 className="text-lg font-bold">{selectedBusiness.name}</h3>
                  <p className="text-xs text-zinc-500">
                    {selectedBusiness.address ?? "No address listed"} · {selectedBusiness.phone ?? "No phone"}
                  </p>
                </div>

                <hr className="border-zinc-200 dark:border-zinc-800" />

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">2. Select Service</h4>
                  {services.length === 0 ? (
                    <p className="text-sm text-zinc-500">No active services offered right now.</p>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {services.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => {
                            setSelectedService(s.id);
                            setSelectedSlot(null);
                            setBookingSuccess(null);
                            setBookingErrors({});
                            fetchAvailableSlots(s.id, selectedStaff, date);
                          }}
                          className={`p-4 rounded-xl border text-left transition ${
                            selectedService === s.id
                              ? "border-zinc-900 dark:border-zinc-100 bg-zinc-900/5 dark:bg-zinc-100/10"
                              : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <span className="font-semibold">{s.name}</span>
                            <span className="font-medium text-sm">
                              {s.price} {s.currency}
                            </span>
                          </div>
                          {s.description && <p className="text-xs text-zinc-500 mt-1">{s.description}</p>}
                          <div className="text-xs text-zinc-400 mt-2">⏱️ {s.duration_minutes} mins</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Staff Selection (Optional) & Date */}
                {selectedService && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className={labelCls}>Select Date</label>
                      <CustomDatePicker
                        value={date}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(newDate) => {
                          setDate(newDate);
                          fetchAvailableSlots(selectedService, selectedStaff, newDate);
                        }}
                      />
                    </div>
                    <div>
                      <label className={labelCls}>Preferred Staff (Optional)</label>
                      <select
                        value={selectedStaff}
                        onChange={(e) => {
                          setSelectedStaff(e.target.value);
                          fetchAvailableSlots(selectedService, e.target.value, date);
                        }}
                        className={getInputCls(false)}
                      >
                        <option value="">Any available staff member</option>
                        {staffMembers.map((st) => (
                          <option key={st.id} value={st.id}>
                            {st.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Available Slots */}
                {selectedService && date && (
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">3. Available Slots</h4>
                        {selectedBusiness?.timezone && (
                          <span className="text-[11px] text-zinc-400 font-normal">
                            All times shown in business timezone ({selectedBusiness.timezone})
                          </span>
                        )}
                      </div>
                      <FieldError error={bookingErrors.slot} />
                    </div>

                    {loadingSlots ? (
                      <p className="text-sm text-zinc-500">Searching available slots...</p>
                    ) : slots.length === 0 ? (
                      <p className="text-sm text-zinc-500">No slots available for this date/service.</p>
                    ) : (
                      <div className="flex flex-wrap gap-2.5">
                        {slots.map((slot) => {
                          const slotTimeStr = new Date(slot.start_time).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            timeZone: selectedBusiness?.timezone || undefined,
                          });
                          const isSelected = selectedSlot?.start_time === slot.start_time;
                          return (
                            <button
                              key={`${slot.start_time}-${slot.staff_id}`}
                              onClick={() => {
                                setSelectedSlot(slot);
                                setBookingSuccess(null);
                                setBookingErrors((prev) => ({ ...prev, slot: "" }));
                              }}
                              className={`px-4 py-2 rounded-xl text-sm font-medium border transition ${
                                isSelected
                                  ? "border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
                                  : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700"
                              }`}
                            >
                              {slotTimeStr}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}

                {/* Customer Booking Form */}
                {selectedSlot && !bookingSuccess && (
                  <form
                    onSubmit={handlePublicBooking}
                    noValidate
                    className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 space-y-4"
                  >
                    <h4 className="font-semibold text-base">Complete Your Booking</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelCls}>Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={custName}
                          onChange={(e) => {
                            setCustName(e.target.value);
                            if (bookingErrors.custName) setBookingErrors({ ...bookingErrors, custName: "" });
                          }}
                          placeholder="John Doe"
                          className={getInputCls(!!bookingErrors.custName)}
                        />
                        <FieldError error={bookingErrors.custName} />
                      </div>

                      <div>
                        <label className={labelCls}>Email Address *</label>
                        <input
                          type="email"
                          required
                          value={custEmail}
                          onChange={(e) => {
                            setCustEmail(e.target.value);
                            if (bookingErrors.custEmail) setBookingErrors({ ...bookingErrors, custEmail: "" });
                          }}
                          placeholder="john@example.com"
                          className={getInputCls(!!bookingErrors.custEmail)}
                        />
                        <FieldError error={bookingErrors.custEmail} />
                      </div>

                      <div>
                        <label className={labelCls}>Mobile / Phone Number</label>
                        <input
                          type="tel"
                          value={custPhone}
                          onChange={(e) => {
                            setCustPhone(e.target.value);
                            if (bookingErrors.custPhone) setBookingErrors({ ...bookingErrors, custPhone: "" });
                          }}
                          placeholder="+1 555-0199"
                          className={getInputCls(!!bookingErrors.custPhone)}
                        />
                        <FieldError error={bookingErrors.custPhone} />
                      </div>

                      <div>
                        <label className={labelCls}>Notes for Appointment</label>
                        <input
                          type="text"
                          value={custNotes}
                          onChange={(e) => setCustNotes(e.target.value)}
                          placeholder="Any special requests or preferences"
                          className={getInputCls(false)}
                        />
                      </div>
                    </div>

                    <button type="submit" disabled={bookingLoading} className={btnPrimary}>
                      {bookingLoading ? "Confirming..." : "Book Appointment"}
                    </button>
                  </form>
                )}

                {/* Booking Confirmation Card */}
                {bookingSuccess && (
                  <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-emerald-900 dark:text-emerald-100 space-y-3">
                    <div className="flex items-center gap-2 font-bold text-lg">
                      <span>🎉</span> Appointment Confirmed!
                    </div>
                    <p className="text-sm">
                      Your appointment has been successfully scheduled for{" "}
                      <strong>
                        {new Date(bookingSuccess.start_time).toLocaleString([], {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </strong>
                      .
                    </p>
                    <button
                      onClick={() => {
                        setBookingSuccess(null);
                        setSelectedSlot(null);
                      }}
                      className={btnSecondary}
                    >
                      Book Another Appointment
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: REGISTER BUSINESS                                                 */}
        {/* ========================================================================= */}
        {view === "register" && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-1">
              <h2 className="text-3xl font-bold">Register Your Business</h2>
              <p className="text-sm text-zinc-500">Create an account to start accepting customer appointments.</p>
            </div>

            <form
              onSubmit={handleRegister}
              noValidate
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 space-y-5 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Business Name *</label>
                  <input
                    type="text"
                    required
                    value={regForm.name}
                    onChange={(e) => {
                      setRegForm({ ...regForm, name: e.target.value });
                      if (regErrors.name) setRegErrors({ ...regErrors, name: "" });
                    }}
                    placeholder="My Salon & Spa"
                    className={getInputCls(!!regErrors.name)}
                  />
                  <FieldError error={regErrors.name} />
                </div>

                <div>
                  <label className={labelCls}>Business Email (Optional)</label>
                  <input
                    type="email"
                    value={regForm.email}
                    onChange={(e) => {
                      setRegForm({ ...regForm, email: e.target.value });
                      if (regErrors.email) setRegErrors({ ...regErrors, email: "" });
                    }}
                    placeholder="contact@mysalon.com"
                    className={getInputCls(!!regErrors.email)}
                  />
                  <FieldError error={regErrors.email} />
                </div>

                <div className="sm:col-span-2">
                  <label className={labelCls}>Description (Optional)</label>
                  <textarea
                    rows={2}
                    value={regForm.description}
                    onChange={(e) => setRegForm({ ...regForm, description: e.target.value })}
                    placeholder="Tell clients about your business"
                    className={getInputCls(false)}
                  />
                </div>

                <div>
                  <label className={labelCls}>Business Mobile / Phone (Optional)</label>
                  <input
                    type="tel"
                    value={regForm.phone}
                    onChange={(e) => {
                      setRegForm({ ...regForm, phone: e.target.value });
                      if (regErrors.phone) setRegErrors({ ...regErrors, phone: "" });
                    }}
                    placeholder="+1 555-0100"
                    className={getInputCls(!!regErrors.phone)}
                  />
                  <FieldError error={regErrors.phone} />
                </div>

                <div>
                  <label className={labelCls}>Address (Optional)</label>
                  <input
                    type="text"
                    value={regForm.address}
                    onChange={(e) => setRegForm({ ...regForm, address: e.target.value })}
                    placeholder="123 Main St"
                    className={getInputCls(false)}
                  />
                </div>

                <div>
                  <label className={labelCls}>Timezone *</label>
                  <input
                    type="text"
                    required
                    value={regForm.timezone}
                    onChange={(e) => setRegForm({ ...regForm, timezone: e.target.value })}
                    placeholder="America/New_York or UTC"
                    className={getInputCls(false)}
                  />
                </div>

                <div>
                  <label className={labelCls}>Currency *</label>
                  <input
                    type="text"
                    required
                    maxLength={3}
                    value={regForm.currency}
                    onChange={(e) => {
                      setRegForm({ ...regForm, currency: e.target.value.toUpperCase() });
                      if (regErrors.currency) setRegErrors({ ...regErrors, currency: "" });
                    }}
                    placeholder="USD"
                    className={getInputCls(!!regErrors.currency)}
                  />
                  <FieldError error={regErrors.currency} />
                </div>
              </div>

              <hr className="border-zinc-200 dark:border-zinc-800" />

              <h4 className="font-semibold text-sm">Owner Account & Login Credentials</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Owner Full Name *</label>
                  <input
                    type="text"
                    required
                    value={regForm.owner_name}
                    onChange={(e) => {
                      setRegForm({ ...regForm, owner_name: e.target.value });
                      if (regErrors.owner_name) setRegErrors({ ...regErrors, owner_name: "" });
                    }}
                    placeholder="Jane Doe"
                    className={getInputCls(!!regErrors.owner_name)}
                  />
                  <FieldError error={regErrors.owner_name} />
                </div>

                <div>
                  <label className={labelCls}>Owner Login Email *</label>
                  <input
                    type="email"
                    required
                    value={regForm.owner_email}
                    onChange={(e) => {
                      setRegForm({ ...regForm, owner_email: e.target.value });
                      if (regErrors.owner_email) setRegErrors({ ...regErrors, owner_email: "" });
                    }}
                    placeholder="jane@mysalon.com"
                    className={getInputCls(!!regErrors.owner_email)}
                  />
                  <FieldError error={regErrors.owner_email} />
                  <span className="text-[11px] text-zinc-400 mt-1 block">
                    Use this email (or your business email) to sign in.
                  </span>
                </div>

                <div className="sm:col-span-2">
                  <label className={labelCls}>Password (min 8 characters) *</label>
                  <input
                    type="password"
                    required
                    minLength={8}
                    value={regForm.password}
                    onChange={(e) => {
                      setRegForm({ ...regForm, password: e.target.value });
                      if (regErrors.password) setRegErrors({ ...regErrors, password: "" });
                    }}
                    placeholder="••••••••"
                    className={getInputCls(!!regErrors.password)}
                  />
                  <FieldError error={regErrors.password} />
                </div>
              </div>

              <div className="flex items-center justify-between pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setRegForm(INITIAL_REG_FORM);
                    setRegErrors({});
                  }}
                  className="text-xs text-zinc-500 underline"
                >
                  Clear Form
                </button>
                <div className="flex items-center gap-3">
                  <button type="button" onClick={openLoginView} className="text-xs text-zinc-500 underline font-medium">
                    Already have an account? Sign In
                  </button>
                  <button type="submit" disabled={registering} className={btnPrimary}>
                    {registering ? "Registering..." : "Create Business"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: OWNER LOGIN                                                       */}
        {/* ========================================================================= */}
        {view === "login" && (
          <div className="max-w-md mx-auto space-y-6 pt-6">
            <div className="text-center space-y-1">
              <h2 className="text-2xl font-bold">Business Owner Login</h2>
              <p className="text-xs text-zinc-500">Sign in using your owner or business email.</p>
            </div>

            <form
              onSubmit={handleLogin}
              noValidate
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-4 shadow-sm"
            >
              <div>
                <label className={labelCls}>Owner Email or Business Email *</label>
                <input
                  type="text"
                  required
                  value={loginEmail}
                  onChange={(e) => {
                    setLoginEmail(e.target.value);
                    if (loginErrors.loginEmail) setLoginErrors({ ...loginErrors, loginEmail: "" });
                  }}
                  placeholder="owner@example.com or business@example.com"
                  className={getInputCls(!!loginErrors.loginEmail)}
                />
                <FieldError error={loginErrors.loginEmail} />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className={labelCls.replace("mb-1.5", "")}>Password *</label>
                  <button
                    type="button"
                    onClick={() => {
                      setErrorMsg("");
                      setSuccessMsg("");
                      setResetErrors({});
                      setForgotEmail(loginEmail);
                      setView("forgot-password");
                    }}
                    className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => {
                    setLoginPassword(e.target.value);
                    if (loginErrors.loginPassword) setLoginErrors({ ...loginErrors, loginPassword: "" });
                  }}
                  placeholder="••••••••"
                  className={getInputCls(!!loginErrors.loginPassword)}
                />
                <FieldError error={loginErrors.loginPassword} />
              </div>

              <button type="submit" disabled={loggingIn} className={`${btnPrimary} w-full mt-2`}>
                {loggingIn ? "Signing in..." : "Sign In"}
              </button>

              <div className="pt-2 text-center flex flex-col gap-2">
                <button
                  type="button"
                  onClick={openRegisterView}
                  className="text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 underline font-medium"
                >
                  Need an account? Register your business
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3.5: FORGOT / RESET PASSWORD                                         */}
        {/* ========================================================================= */}
        {view === "forgot-password" && (
          <div className="max-w-md mx-auto space-y-6 pt-6">
            <div className="text-center space-y-1">
              <h2 className="text-2xl font-bold">Reset Your Password</h2>
              <p className="text-xs text-zinc-500">Enter your account email and choose a new password.</p>
            </div>

            <form
              onSubmit={handleResetPassword}
              noValidate
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-4 shadow-sm"
            >
              <div>
                <label className={labelCls}>Account Email *</label>
                <input
                  type="email"
                  required
                  value={forgotEmail}
                  onChange={(e) => {
                    setForgotEmail(e.target.value);
                    if (resetErrors.email) setResetErrors({ ...resetErrors, email: "" });
                  }}
                  placeholder="owner@example.com"
                  className={getInputCls(!!resetErrors.email)}
                />
                <FieldError error={resetErrors.email} />
              </div>

              <div>
                <label className={labelCls}>New Password (min 8 characters) *</label>
                <input
                  type="password"
                  required
                  minLength={8}
                  value={resetNewPass}
                  onChange={(e) => {
                    setResetNewPass(e.target.value);
                    if (resetErrors.newPass) setResetErrors({ ...resetErrors, newPass: "" });
                  }}
                  placeholder="••••••••"
                  className={getInputCls(!!resetErrors.newPass)}
                />
                <FieldError error={resetErrors.newPass} />
              </div>

              <div>
                <label className={labelCls}>Confirm New Password *</label>
                <input
                  type="password"
                  required
                  value={resetConfirmPass}
                  onChange={(e) => {
                    setResetConfirmPass(e.target.value);
                    if (resetErrors.confirmPass) setResetErrors({ ...resetErrors, confirmPass: "" });
                  }}
                  placeholder="••••••••"
                  className={getInputCls(!!resetErrors.confirmPass)}
                />
                <FieldError error={resetErrors.confirmPass} />
              </div>

              <button type="submit" disabled={resetting} className={`${btnPrimary} w-full mt-2`}>
                {resetting ? "Resetting..." : "Reset Password & Login"}
              </button>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={openLoginView}
                  className="text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 underline font-medium"
                >
                  ← Back to Login
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: OWNER DASHBOARD                                                   */}
        {/* ========================================================================= */}
        {view === "dashboard" && (
          <div className="space-y-6">
            {/* Dashboard Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold">{myBusiness?.name ?? "Business Portal"}</h2>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium">
                    Yarivo Appointments
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mt-1.5 flex items-center gap-1.5">
                  <span>Public Booking Link:</span>
                  <span className="font-mono bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-zinc-800 dark:text-zinc-200 font-medium">
                    yarivo.com/book/{myBusiness?.slug}
                  </span>
                </p>
              </div>

              {/* Tab navigation */}
              <div className="flex flex-wrap gap-1.5">
                {(["appointments", "services", "staff", "hours", "billing"] as DashboardTab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setDashTab(tab)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition ${
                      dashTab === tab
                        ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                    }`}
                  >
                    {tab === "billing" ? "💳 Plan & Billing" : tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Proactive Usage Alert Banner */}
            {subscription && subscription.plan !== "pro" && subscription.appointments_limit != null && (subscription.appointments_used ?? 0) >= Math.floor(subscription.appointments_limit * 0.67) && (
              <div
                className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  (subscription.appointments_used ?? 0) >= (subscription.appointments_limit ?? 15)
                    ? "bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900/60 text-red-900 dark:text-red-200"
                    : "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{(subscription.appointments_used ?? 0) >= (subscription.appointments_limit ?? 15) ? "🚨" : "⚡"}</span>
                  <div>
                    <p className="font-bold text-sm">
                      {(subscription.appointments_used ?? 0) >= (subscription.appointments_limit ?? 15)
                        ? `${subscription.appointments_limit} ${subscription.plan === "free" ? "Free" : "Starter"} Appointments Limit Reached!`
                        : `You've used ${subscription.appointments_used} of ${subscription.appointments_limit} ${subscription.plan === "free" ? "free" : "Starter"} appointments.`}
                    </p>
                    <p className="text-xs opacity-90">
                      {(subscription.appointments_used ?? 0) >= (subscription.appointments_limit ?? 15)
                        ? `New online bookings are currently blocked. Upgrade to ${subscription.plan === "free" ? "Starter ($9/mo) or Pro ($29/mo)" : "Pro ($29/mo)"} to accept more appointments.`
                        : `Only ${(subscription.appointments_limit ?? 15) - (subscription.appointments_used ?? 0)} bookings left on your ${subscription.plan === "free" ? "free" : "Starter"} plan. Upgrade so customers can keep booking without interruption.`}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setDashTab("billing");
                    setSelectedUpgradePlan(subscription.plan === "free" ? "starter" : "pro");
                    setShowUpgradeModal(true);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap shadow-sm transition ${
                    (subscription.appointments_used ?? 0) >= (subscription.appointments_limit ?? 15)
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-amber-600 hover:bg-amber-700 text-white"
                  }`}
                >
                  ⭐ Upgrade to {subscription.plan === "free" ? "Starter ($9/mo)" : "Pro ($29/mo)"}
                </button>
              </div>
            )}

            {loadingDash ? (
              <div className="p-12 text-center text-sm text-zinc-500">Loading dashboard...</div>
            ) : (
              <>
                {/* Tab: Appointments */}
                {dashTab === "appointments" && (
                  <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg">Yarivo Appointments ({dashAppointments.length})</h3>
                        <p className="text-xs text-zinc-500">Manage all customer appointments, bookings, and statuses.</p>
                      </div>
                      <button onClick={() => loadDashboardData()} className={btnSecondary}>
                        🔄 Refresh
                      </button>
                    </div>

                    {dashAppointments.length === 0 ? (
                      <p className="text-sm text-zinc-500 py-6 text-center">No appointments booked yet.</p>
                    ) : (
                      <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                        {dashAppointments.map((appt) => (
                          <div key={appt.id} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="space-y-1.5 flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                                  👤 {appt.customer?.name ?? "Customer"}
                                </span>
                                <span
                                  className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                                    appt.status === "CONFIRMED"
                                      ? "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                                      : appt.status === "COMPLETED"
                                      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                                      : appt.status === "NO_SHOW"
                                      ? "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                                      : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                                  }`}
                                >
                                  {appt.status}
                                </span>
                              </div>

                              <div className="text-xs text-zinc-500 dark:text-zinc-400 flex flex-wrap items-center gap-2">
                                {appt.customer?.email && <span>✉️ {appt.customer.email}</span>}
                                {appt.customer?.phone && (
                                  <>
                                    <span>·</span>
                                    <span>📞 {appt.customer.phone}</span>
                                  </>
                                )}
                              </div>

                              <div className="text-xs text-zinc-600 dark:text-zinc-300 flex flex-wrap items-center gap-2 pt-0.5">
                                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                                  ✂️ {appt.service?.name ?? "Service"}
                                </span>
                                <span>·</span>
                                <span>💈 Staff: {appt.staff?.name ?? "Any Staff"}</span>
                                <span>·</span>
                                <span>
                                  📅{" "}
                                  {new Date(appt.start_time).toLocaleString([], {
                                    dateStyle: "medium",
                                    timeStyle: "short",
                                  })}
                                </span>
                              </div>

                              {appt.customer_notes && (
                                <p className="text-xs text-zinc-500 italic bg-zinc-50 dark:bg-zinc-800/60 p-2 rounded-lg mt-1 border border-zinc-200/50 dark:border-zinc-700/50">
                                  💬 <span className="font-medium not-italic">Notes:</span> {appt.customer_notes}
                                </p>
                              )}
                            </div>

                            {appt.status === "CONFIRMED" && (
                              <div className="flex items-center gap-2 self-start md:self-center">
                                <button
                                  onClick={() => updateAppointmentStatus(appt.id, "COMPLETED")}
                                  className="text-xs px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-medium hover:bg-emerald-100 transition"
                                >
                                  Complete
                                </button>
                                <button
                                  onClick={() => updateAppointmentStatus(appt.id, "NO_SHOW")}
                                  className="text-xs px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 font-medium hover:bg-amber-100 transition"
                                >
                                  No Show
                                </button>
                                <button
                                  onClick={() => updateAppointmentStatus(appt.id, "CANCELLED")}
                                  className="text-xs px-3 py-1.5 rounded-lg bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300 font-medium hover:bg-red-100 transition"
                                >
                                  Cancel
                                </button>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Tab: Services */}
                {dashTab === "services" && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold text-lg">Services List ({dashServices.length})</h3>
                        {editingServiceId && (
                          <button
                            type="button"
                            onClick={cancelEditService}
                            className="text-xs text-zinc-500 underline"
                          >
                            + Switch to New Service
                          </button>
                        )}
                      </div>
                      {dashServices.length === 0 ? (
                        <p className="text-sm text-zinc-500">No services created yet.</p>
                      ) : (
                        <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                          {dashServices.map((s) => {
                            const isEditing = editingServiceId === s.id;
                            return (
                              <div
                                key={s.id}
                                onClick={() => startEditService(s)}
                                className={`group py-3.5 px-3 rounded-xl flex items-center justify-between gap-3 cursor-pointer transition border ${
                                  isEditing
                                    ? "bg-zinc-100/80 dark:bg-zinc-800/80 border-zinc-900 dark:border-zinc-100 shadow-sm ring-1 ring-zinc-900/10 dark:ring-zinc-100/20"
                                    : "border-transparent hover:bg-zinc-50 dark:hover:bg-zinc-800/40 hover:border-zinc-200 dark:hover:border-zinc-800"
                                }`}
                              >
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold text-sm truncate">{s.name}</span>
                                    {isEditing && (
                                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium">
                                        Editing
                                      </span>
                                    )}
                                    {!s.active && (
                                      <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 font-medium">
                                        Inactive
                                      </span>
                                    )}
                                  </div>
                                  {s.description && (
                                    <p className="text-xs text-zinc-500 mt-0.5 truncate">{s.description}</p>
                                  )}
                                  <div className="text-xs text-zinc-400 mt-1 flex flex-wrap items-center gap-2">
                                    <span>⏱️ {s.duration_minutes} min</span>
                                    <span>·</span>
                                    <span>Buffers: {s.buffer_minutes_before}m / {s.buffer_minutes_after}m</span>
                                    <span>·</span>
                                    <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                                      {s.price} {s.currency}
                                    </span>
                                  </div>
                                </div>

                                <div className="flex items-center gap-2">
                                  <button
                                    type="button"
                                    title="Delete service"
                                    aria-label="Delete service"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleDeleteService(s.id, s.name);
                                    }}
                                    className="p-2 rounded-xl text-zinc-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 border border-transparent hover:border-red-200 dark:hover:border-red-900/40 transition"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="w-4 h-4"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.67.028 2.49.083V3.75a1.25 1.25 0 0 0-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.333c.82-.055 1.65-.083 2.5-.083Zm-2.5 5.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Zm5 0a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Add / Edit Service Form */}
                    <form
                      onSubmit={handleSaveService}
                      noValidate
                      className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-3 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-base">
                          {editingServiceId ? "Edit Service" : "Add New Service"}
                        </h3>
                        {editingServiceId && (
                          <button
                            type="button"
                            onClick={cancelEditService}
                            className="text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 underline"
                          >
                            Cancel
                          </button>
                        )}
                      </div>

                      <div>
                        <label className={labelCls}>Service Name *</label>
                        <input
                          type="text"
                          required
                          value={newServiceName}
                          onChange={(e) => {
                            setNewServiceName(e.target.value);
                            if (serviceErrors.name) setServiceErrors({ ...serviceErrors, name: "" });
                          }}
                          placeholder="e.g. Haircut & Styling"
                          className={getInputCls(!!serviceErrors.name)}
                        />
                        <FieldError error={serviceErrors.name} />
                      </div>

                      <div>
                        <label className={labelCls}>Description (Optional)</label>
                        <input
                          type="text"
                          value={newServiceDesc}
                          onChange={(e) => setNewServiceDesc(e.target.value)}
                          placeholder="Brief description of the service"
                          className={getInputCls(false)}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className={labelCls}>Duration (Minutes) *</label>
                          <input
                            type="number"
                            required
                            min={1}
                            value={newServiceDuration}
                            onChange={(e) => {
                              setNewServiceDuration(Number(e.target.value));
                              if (serviceErrors.duration) setServiceErrors({ ...serviceErrors, duration: "" });
                            }}
                            className={getInputCls(!!serviceErrors.duration)}
                          />
                          <FieldError error={serviceErrors.duration} />
                        </div>
                        <div>
                          <label className={labelCls}>Price ({myBusiness?.currency || "USD"}) *</label>
                          <input
                            type="number"
                            required
                            min={0}
                            value={newServicePrice}
                            onChange={(e) => {
                              setNewServicePrice(Number(e.target.value));
                              if (serviceErrors.price) setServiceErrors({ ...serviceErrors, price: "" });
                            }}
                            className={getInputCls(!!serviceErrors.price)}
                          />
                          <FieldError error={serviceErrors.price} />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col justify-between">
                          <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 h-8 flex items-end mb-1.5">
                            Prep Buffer (min)
                          </label>
                          <input
                            type="number"
                            min={0}
                            value={newServiceBufBefore}
                            onChange={(e) => {
                              setNewServiceBufBefore(Number(e.target.value));
                              if (serviceErrors.bufBefore) setServiceErrors({ ...serviceErrors, bufBefore: "" });
                            }}
                            className={getInputCls(!!serviceErrors.bufBefore)}
                          />
                          <FieldError error={serviceErrors.bufBefore} />
                        </div>
                        <div className="flex flex-col justify-between">
                          <label className="text-[11px] font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 h-8 flex items-end mb-1.5">
                            Cleanup Buffer (min)
                          </label>
                          <input
                            type="number"
                            min={0}
                            value={newServiceBufAfter}
                            onChange={(e) => {
                              setNewServiceBufAfter(Number(e.target.value));
                              if (serviceErrors.bufAfter) setServiceErrors({ ...serviceErrors, bufAfter: "" });
                            }}
                            className={getInputCls(!!serviceErrors.bufAfter)}
                          />
                          <FieldError error={serviceErrors.bufAfter} />
                        </div>
                      </div>

                      {editingServiceId && (
                        <div className="pt-1">
                          <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
                            <input
                              type="checkbox"
                              checked={newServiceActive}
                              onChange={(e) => setNewServiceActive(e.target.checked)}
                              className="rounded"
                            />
                            Active (visible to customers for booking)
                          </label>
                        </div>
                      )}

                      <div className="flex items-center gap-2 pt-2">
                        {editingServiceId && (
                          <button
                            type="button"
                            onClick={cancelEditService}
                            className={`${btnSecondary} flex-1`}
                          >
                            Cancel
                          </button>
                        )}
                        <button
                          type="submit"
                          disabled={savingService}
                          className={`${btnPrimary} flex-1`}
                        >
                          {savingService
                            ? "Saving..."
                            : editingServiceId
                            ? "Update Service"
                            : "Create Service"}
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Tab: Staff */}
                {dashTab === "staff" && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold text-lg">Staff Members ({dashStaff.length})</h3>
                        {editingStaffId && (
                          <button
                            type="button"
                            onClick={cancelEditStaff}
                            className="text-xs text-zinc-500 underline"
                          >
                            + Switch to New Staff
                          </button>
                        )}
                      </div>
                      {dashStaff.length === 0 ? (
                        <p className="text-sm text-zinc-500">No staff members added yet.</p>
                      ) : (
                        <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                          {dashStaff.map((st) => {
                            const isEditing = editingStaffId === st.id;
                            return (
                              <div
                                key={st.id}
                                onClick={() => startEditStaff(st)}
                                className={`group py-3.5 px-3 rounded-xl flex items-center justify-between gap-3 cursor-pointer transition border ${
                                  isEditing
                                    ? "bg-zinc-100/80 dark:bg-zinc-800/80 border-zinc-900 dark:border-zinc-100 shadow-sm ring-1 ring-zinc-900/10 dark:ring-zinc-100/20"
                                    : "border-transparent hover:bg-zinc-50 dark:hover:bg-zinc-800/40 hover:border-zinc-200 dark:hover:border-zinc-800"
                                }`}
                              >
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold text-sm truncate">{st.name}</span>
                                    {isEditing && (
                                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium">
                                        Editing
                                      </span>
                                    )}
                                    {st.active ? (
                                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-medium">
                                        Active
                                      </span>
                                    ) : (
                                      <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 font-medium">
                                        Inactive
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-xs text-zinc-400 mt-1 flex flex-wrap items-center gap-2">
                                    <span>{st.email ?? "No email"}</span>
                                    {st.phone && (
                                      <>
                                        <span>·</span>
                                        <span>{st.phone}</span>
                                      </>
                                    )}
                                  </div>
                                </div>

                                <div className="flex items-center gap-2">
                                  <button
                                    type="button"
                                    title="Delete staff member"
                                    aria-label="Delete staff member"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleDeleteStaff(st.id, st.name);
                                    }}
                                    className="p-2 rounded-xl text-zinc-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 border border-transparent hover:border-red-200 dark:hover:border-red-900/40 transition"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="w-4 h-4"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.67.028 2.49.083V3.75a1.25 1.25 0 0 0-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.333c.82-.055 1.65-.083 2.5-.083Zm-2.5 5.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Zm5 0a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75Z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Add / Edit Staff Form */}
                    <form
                      onSubmit={handleSaveStaff}
                      noValidate
                      className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-3 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-base">
                          {editingStaffId ? "Edit Staff Member" : "Add Staff Member"}
                        </h3>
                        {editingStaffId && (
                          <button
                            type="button"
                            onClick={cancelEditStaff}
                            className="text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 underline"
                          >
                            Cancel
                          </button>
                        )}
                      </div>

                      <div>
                        <label className={labelCls}>Staff Full Name *</label>
                        <input
                          type="text"
                          required
                          value={newStaffName}
                          onChange={(e) => {
                            setNewStaffName(e.target.value);
                            if (staffErrors.name) setStaffErrors({ ...staffErrors, name: "" });
                          }}
                          placeholder="e.g. Alex Stylist"
                          className={getInputCls(!!staffErrors.name)}
                        />
                        <FieldError error={staffErrors.name} />
                      </div>

                      <div>
                        <label className={labelCls}>Email (Optional)</label>
                        <input
                          type="email"
                          value={newStaffEmail}
                          onChange={(e) => {
                            setNewStaffEmail(e.target.value);
                            if (staffErrors.email) setStaffErrors({ ...staffErrors, email: "" });
                          }}
                          placeholder="alex@mysalon.com"
                          className={getInputCls(!!staffErrors.email)}
                        />
                        <FieldError error={staffErrors.email} />
                      </div>

                      <div>
                        <label className={labelCls}>Mobile / Phone Number (Optional)</label>
                        <input
                          type="tel"
                          value={newStaffPhone}
                          onChange={(e) => {
                            setNewStaffPhone(e.target.value);
                            if (staffErrors.phone) setStaffErrors({ ...staffErrors, phone: "" });
                          }}
                          placeholder="+1 555-0100"
                          className={getInputCls(!!staffErrors.phone)}
                        />
                        <FieldError error={staffErrors.phone} />
                      </div>

                      {editingStaffId && (
                        <div className="pt-1">
                          <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
                            <input
                              type="checkbox"
                              checked={newStaffActive}
                              onChange={(e) => setNewStaffActive(e.target.checked)}
                              className="rounded"
                            />
                            Active (available for customer appointments)
                          </label>
                        </div>
                      )}

                      <div className="flex items-center gap-2 pt-2">
                        {editingStaffId && (
                          <button
                            type="button"
                            onClick={cancelEditStaff}
                            className={`${btnSecondary} flex-1`}
                          >
                            Cancel
                          </button>
                        )}
                        <button
                          type="submit"
                          disabled={savingStaff}
                          className={`${btnPrimary} flex-1`}
                        >
                          {savingStaff
                            ? "Saving..."
                            : editingStaffId
                            ? "Update Staff"
                            : "Add Staff"}
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Tab: Business Hours */}
                {dashTab === "hours" && (
                  <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 space-y-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg">Weekly Operating Hours</h3>
                        <p className="text-xs text-zinc-500">Configure opening times for available appointment slots.</p>
                      </div>
                      <button onClick={handleSaveHours} className={btnPrimary}>
                        Save Operating Hours
                      </button>
                    </div>

                    <div className="space-y-3">
                      {dashHours.map((h, idx) => (
                        <div
                          key={h.day_of_week}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 gap-3"
                        >
                          <div className="w-32 font-semibold text-sm">{DAYS_OF_WEEK[h.day_of_week]}</div>
                          <div className="flex items-center gap-4 flex-1">
                            <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
                              <input
                                type="checkbox"
                                checked={h.is_open}
                                onChange={(e) => {
                                  const updated = [...dashHours];
                                  updated[idx].is_open = e.target.checked;
                                  setDashHours(updated);
                                }}
                                className="rounded"
                              />
                              Open for business
                            </label>

                            {h.is_open && (
                              <div className="flex items-center gap-2">
                                <input
                                  type="time"
                                  value={h.opening_time?.slice(0, 5) ?? "09:00"}
                                  onChange={(e) => {
                                    const updated = [...dashHours];
                                    updated[idx].opening_time = `${e.target.value}:00`;
                                    setDashHours(updated);
                                  }}
                                  className="px-2 py-1 border rounded text-xs bg-transparent"
                                />
                                <span className="text-xs text-zinc-400">to</span>
                                <input
                                  type="time"
                                  value={h.closing_time?.slice(0, 5) ?? "17:00"}
                                  onChange={(e) => {
                                    const updated = [...dashHours];
                                    updated[idx].closing_time = `${e.target.value}:00`;
                                    setDashHours(updated);
                                  }}
                                  className="px-2 py-1 border rounded text-xs bg-transparent"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab: Billing & Subscription */}
                {dashTab === "billing" && (
                  <div className="space-y-6">
                    {/* Current Plan & Usage Card */}
                    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 space-y-6 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2.5">
                            <h3 className="text-xl font-bold">Subscription Plan</h3>
                            <span
                              className={`text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                                subscription?.plan === "pro"
                                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                                  : subscription?.plan === "starter"
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300"
                                  : "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                              }`}
                            >
                              {subscription?.plan === "pro"
                                ? "✨ Pro Plan ($29/mo)"
                                : subscription?.plan === "starter"
                                ? "🚀 Starter Plan ($9/mo)"
                                : "Free Tier"}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-500 mt-1">
                            {subscription?.plan === "pro"
                              ? "You have unlimited appointments and full feature access."
                              : subscription?.plan === "starter"
                              ? "You have up to 50 appointments per month. Upgrade to Pro for unlimited."
                              : "You are on the free tier (15 appointments limit). Upgrade anytime for more bookings."}
                          </p>
                        </div>

                        {subscription?.plan !== "free" ? (
                          <button
                            onClick={handleCancelSubscription}
                            className="text-xs text-red-600 hover:text-red-700 underline font-medium"
                          >
                            Downgrade to Free Tier
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setSelectedUpgradePlan("starter");
                              setShowUpgradeModal(true);
                              setPaymentErrors({});
                            }}
                            className={btnPrimary}
                          >
                            ⭐ Upgrade Plan
                          </button>
                        )}
                      </div>

                      {/* Usage Meter */}
                      <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 space-y-3">
                        <div className="flex justify-between items-center text-sm font-semibold">
                          <span>Appointment Usage</span>
                          <span>
                            {subscription?.appointments_used ?? 0} /{" "}
                            {subscription?.appointments_limit == null ? "∞ (Unlimited)" : `${subscription.appointments_limit} Bookings`}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-3 rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all duration-500 ${
                              subscription?.plan === "pro"
                                ? "bg-emerald-500 w-full"
                                : subscription?.appointments_limit != null && (subscription?.appointments_used ?? 0) >= subscription.appointments_limit
                                ? "bg-red-500 w-full"
                                : subscription?.appointments_limit != null && (subscription?.appointments_used ?? 0) >= Math.floor(subscription.appointments_limit * 0.67)
                                ? "bg-amber-500"
                                : "bg-zinc-900 dark:bg-zinc-100"
                            }`}
                            style={{
                              width:
                                subscription?.plan === "pro"
                                  ? "100%"
                                  : `${Math.min(
                                      100,
                                      ((subscription?.appointments_used ?? 0) / (subscription?.appointments_limit ?? 15)) * 100
                                    )}%`,
                            }}
                          />
                        </div>

                        <div className="flex justify-between items-center text-xs text-zinc-500">
                          <span>
                            {subscription?.plan === "pro"
                              ? "Unlimited bookings available"
                              : `${Math.max(
                                  0,
                                  (subscription?.appointments_limit ?? 15) - (subscription?.appointments_used ?? 0)
                                )} bookings remaining`}
                          </span>
                          {subscription?.appointments_limit != null && (subscription?.appointments_used ?? 0) >= subscription.appointments_limit && subscription?.plan !== "pro" && (
                            <span className="text-red-600 dark:text-red-400 font-semibold">
                              ⚠️ Limit reached. Upgrade to accept more bookings.
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Plan Comparison Grid — 3 tiers */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Free Tier */}
                      <div className={`p-6 rounded-2xl border bg-white dark:bg-zinc-900 space-y-4 ${
                        subscription?.plan === "free"
                          ? "border-2 border-zinc-900 dark:border-zinc-100"
                          : "border-zinc-200 dark:border-zinc-800"
                      }`}>
                        {subscription?.plan === "free" && (
                          <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 mb-1">
                            CURRENT PLAN
                          </span>
                        )}
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-base">Free Tier</h4>
                            <p className="text-xs text-zinc-500 mt-0.5">For getting started & trying out</p>
                          </div>
                          <span className="font-black text-lg">$0</span>
                        </div>
                        <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                          <li className="flex items-center gap-2">✓ Up to 15 appointments included</li>
                          <li className="flex items-center gap-2">✓ Mobile-first public booking URL</li>
                          <li className="flex items-center gap-2">✓ Service & staff management</li>
                          <li className="flex items-center gap-2">✓ Customer database</li>
                        </ul>
                      </div>

                      {/* Starter Plan */}
                      <div className={`p-6 rounded-2xl border bg-white dark:bg-zinc-900 space-y-4 shadow-sm relative ${
                        subscription?.plan === "starter"
                          ? "border-2 border-blue-500 dark:border-blue-400"
                          : subscription?.plan === "free"
                          ? "border-2 border-zinc-900 dark:border-zinc-100"
                          : "border-zinc-200 dark:border-zinc-800"
                      }`}>
                        {subscription?.plan === "starter" ? (
                          <span className="absolute -top-3 right-6 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500 text-white">
                            CURRENT PLAN
                          </span>
                        ) : subscription?.plan === "free" ? (
                          <span className="absolute -top-3 right-6 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
                            BEST VALUE
                          </span>
                        ) : null}
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-base">Starter Plan</h4>
                            <p className="text-xs text-zinc-500 mt-0.5">For small businesses</p>
                          </div>
                          <div className="text-right">
                            <span className="font-black text-2xl">$9</span>
                            <span className="text-xs text-zinc-400">/mo</span>
                          </div>
                        </div>
                        <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                          <li className="flex items-center gap-2 font-medium text-zinc-900 dark:text-zinc-100">
                            ✓ <strong>50 Appointments</strong> per month
                          </li>
                          <li className="flex items-center gap-2">✓ Mobile-first public booking URL</li>
                          <li className="flex items-center gap-2">✓ Service & staff management</li>
                          <li className="flex items-center gap-2">✓ Customer database</li>
                        </ul>
                        {subscription?.plan === "free" && (
                          <button
                            onClick={() => {
                              setSelectedUpgradePlan("starter");
                              setShowUpgradeModal(true);
                              setPaymentErrors({});
                            }}
                            className={`${btnPrimary} w-full mt-3`}
                          >
                            Upgrade to Starter ($9/mo)
                          </button>
                        )}
                      </div>

                      {/* Pro Plan */}
                      <div className={`p-6 rounded-2xl border bg-white dark:bg-zinc-900 space-y-4 shadow-sm relative ${
                        subscription?.plan === "pro"
                          ? "border-2 border-emerald-500 dark:border-emerald-400"
                          : "border-zinc-200 dark:border-zinc-800"
                      }`}>
                        {subscription?.plan === "pro" ? (
                          <span className="absolute -top-3 right-6 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500 text-white">
                            CURRENT PLAN
                          </span>
                        ) : (
                          <span className="absolute -top-3 right-6 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
                            RECOMMENDED
                          </span>
                        )}
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-base">Pro Plan</h4>
                            <p className="text-xs text-zinc-500 mt-0.5">For growing appointment businesses</p>
                          </div>
                          <div className="text-right">
                            <span className="font-black text-2xl">$29</span>
                            <span className="text-xs text-zinc-400">/mo</span>
                          </div>
                        </div>
                        <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                          <li className="flex items-center gap-2 font-medium text-zinc-900 dark:text-zinc-100">
                            ✓ <strong>Unlimited Appointments</strong> (no cap)
                          </li>
                          <li className="flex items-center gap-2">✓ Unlimited Staff & Services</li>
                          <li className="flex items-center gap-2">✓ Automated Reminders & Notifications</li>
                          <li className="flex items-center gap-2">✓ Priority Booking Engine</li>
                        </ul>
                        {subscription?.plan !== "pro" && (
                          <button
                            onClick={() => {
                              setSelectedUpgradePlan("pro");
                              setShowUpgradeModal(true);
                              setPaymentErrors({});
                            }}
                            className={`${btnPrimary} w-full mt-3`}
                          >
                            Upgrade to Pro ($29/mo)
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Upgrade Checkout Modal */}
                {showUpgradeModal && (
                  <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 max-w-md w-full p-6 sm:p-8 space-y-5 shadow-2xl animate-in fade-in zoom-in-95">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold">Upgrade to {selectedUpgradePlan === "pro" ? "Pro" : "Starter"}</h3>
                          <p className="text-xs text-zinc-500 mt-1">${selectedUpgradePlan === "pro" ? "29" : "9"}.00 / month · Cancel anytime</p>
                        </div>
                        <button
                          onClick={() => setShowUpgradeModal(false)}
                          className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        >
                          ✕
                        </button>
                      </div>

                      <form onSubmit={handleUpgradeSubscription} noValidate className="space-y-4">
                        <div>
                          <label className={labelCls}>Cardholder Name *</label>
                          <input
                            type="text"
                            required
                            value={cardholderName}
                            onChange={(e) => {
                              setCardholderName(e.target.value);
                              if (paymentErrors.name) setPaymentErrors({ ...paymentErrors, name: "" });
                            }}
                            placeholder="Jane Doe"
                            className={getInputCls(!!paymentErrors.name)}
                          />
                          <FieldError error={paymentErrors.name} />
                        </div>

                        <div>
                          <label className={labelCls}>Card Number *</label>
                          <input
                            type="text"
                            required
                            maxLength={19}
                            value={cardNumber}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();
                              setCardNumber(val);
                              if (paymentErrors.card) setPaymentErrors({ ...paymentErrors, card: "" });
                            }}
                            placeholder="4242 4242 4242 4242"
                            className={getInputCls(!!paymentErrors.card)}
                          />
                          <FieldError error={paymentErrors.card} />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className={labelCls}>Expires (MM/YY) *</label>
                            <input
                              type="text"
                              required
                              maxLength={5}
                              value={cardExp}
                              onChange={(e) => {
                                let val = e.target.value.replace(/\D/g, "");
                                if (val.length >= 3) {
                                  val = `${val.slice(0, 2)}/${val.slice(2, 4)}`;
                                }
                                setCardExp(val);
                                if (paymentErrors.exp) setPaymentErrors({ ...paymentErrors, exp: "" });
                              }}
                              placeholder="12/28"
                              className={getInputCls(!!paymentErrors.exp)}
                            />
                            <FieldError error={paymentErrors.exp} />
                          </div>

                          <div>
                            <label className={labelCls}>CVC *</label>
                            <input
                              type="text"
                              required
                              maxLength={4}
                              value={cardCvc}
                              onChange={(e) => {
                                setCardCvc(e.target.value.replace(/\D/g, ""));
                                if (paymentErrors.cvc) setPaymentErrors({ ...paymentErrors, cvc: "" });
                              }}
                              placeholder="123"
                              className={getInputCls(!!paymentErrors.cvc)}
                            />
                            <FieldError error={paymentErrors.cvc} />
                          </div>
                        </div>

                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={upgradingSub}
                            className={`${btnPrimary} w-full py-3 font-semibold text-base`}
                          >
                            {upgradingSub ? "Processing Payment..." : `Pay $${selectedUpgradePlan === "pro" ? "29" : "9"} & Activate ${selectedUpgradePlan === "pro" ? "Pro" : "Starter"}`}
                          </button>
                        </div>

                        <p className="text-[11px] text-zinc-400 text-center flex items-center justify-center gap-1">
                          🔒 Secure 256-bit encrypted checkout
                        </p>
                      </form>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </main>

      {/* Global Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 py-6 mt-12 text-center text-xs text-zinc-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-medium text-zinc-700 dark:text-zinc-300">
            <span className="w-5 h-5 rounded-md bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center font-bold text-[10px]">
              Y
            </span>
            <span className="font-bold">Yarivo Appointments</span>
            <span className="text-zinc-400">·</span>
            <span className="text-zinc-400 font-mono">yarivo.com</span>
          </div>
          <div>
            © {new Date().getFullYear()} Yarivo. Global Appointment & Booking Platform.
          </div>
        </div>
      </footer>
    </div>
  );
}