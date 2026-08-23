# PRODUCT REQUIREMENTS — Appointment Booking SaaS

**Stage:** STAGE 0 — Product Validation
**Status:** Draft for review
**Version:** 0.1.0

> This document validates the product before any application code is written. It captures the target niche, customer problems, competitive landscape, MVP scope, business model, pricing hypothesis, risks, and a validation plan. It is a living document meant to be refined with real user feedback.

---

## 1. Recommended Target Niche

**Solo and small-team independent beauty & wellness professionals** — specifically:

- Barbers
- Hairstylists / mobile stylists
- Nail technicians
- Massage therapists
- Estheticians / skin-care specialists
- Personal trainers (small independent studios)

**Why this niche:**
- They operate on booked appointments by nature, so the value proposition is immediate and obvious.
- Most are solo or micro-teams (1–5 staff), so they are underserved by enterprise scheduling tools and over-served by generic meeting schedulers that don't understand service duration, staff, and timezone nuances.
- They are location-based (a salon/studio), so local availability and business hours matter.
- They have professional services with price + duration, matching the core model perfectly.
- They typically have thin profit margins, so they are price-sensitive — a free tier with a low-cost paid plan is an attractive entry point.
- They rely heavily on mobile (checking their phone between clients), making a mobile-first experience critical.

**Decision (sensible default):** Start with **beauty & wellness solo professionals** as the beachhead. This is a focused, homogeneous segment with a clear "jobs to be done," which makes both product and marketing simpler than chasing all appointment-based businesses at once.

> **Note:** This is a default choice. If you have a stronger network or insight in a different niche (e.g., tutors, consultants, auto-repair), we should revisit before locking the roadmap.

---

## 2. Target Customer Profile

### Primary paying customer: The Business Owner
- **Persona "Solo Stylist Sam"**
  - Age 28–45, runs a one-chair barbershop or a small home-studio salon.
  - Currently uses a mix of phone calls, text/WhatsApp, Instagram DMs, and a paper or Google calendar to take bookings.
  - Comfortable with a smartphone; uses Instagram and WhatsApp daily; not deeply technical.
  - Wants to stop juggling messages and reduce no-shows.
  - Wants to look professional and let clients book 24/7 without back-and-forth.

- **Persona "Tiny Team Trainer Tia"**
  - Runs a small studio with 2–4 trainers/therapists.
  - Needs multi-staff scheduling and per-staff availability.
  - Willing to pay €9–€19/month if it saves admin time and grows bookings.

### Secondary free user: The Customer
- A person who found the business via search, social media, or referral.
- Wants to book quickly on their phone with minimal friction.
- Does **not** want to create an account or install an app.
- Wants immediate confirmation and a clear record of their appointment.

---

## 3. Main Customer Problem

**For the business owner:**
1. **Manual scheduling overhead** — Constant phone calls, texts, and DMs to arrange appointments; high admin burden.
2. **Double-booking** — Paper/mental calendars and multi-channel requests cause conflicts.
3. **No-shows** — No reminder system; clients forget appointments.
4. **No 24/7 booking** — Clients can't book outside business hours; bookings lost to competitors who offer online booking.
5. **Unprofessional image** — No polished, branded booking page; looks less credible than competitors.
6. **No customer data** — Little visibility into who their clients are, what they book, and their history.

**For the customer:**
1. **Friction** — Must call, message, or wait for a reply to book.
2. **Uncertainty** — No confirmation or record of the appointment.
3. **No self-service** — Cannot easily reschedule or cancel.

---

## 4. Competitor Categories

1. **Generic meeting schedulers** — Calendly, YouCanBookMe, Acuity (now Squarespace). Good for meetings, but weak on service price/duration, staff availability per service, and beauty-industry workflows.
2. **Industry-specific platforms** — Booksy, Fresha, Vagaro, Treatwell. Powerful but often heavy, feature-bloated, and sometimes costly or complex for tiny operations. May also act as a marketplace (taking a cut / owning the client relationship).
3. **DIY / manual methods** — Phone, paper, Google Calendar, Google Forms, social media DMs. Zero cost but high admin burden and no-shows.
4. **POS/back-office tools** — Square Appointments, Mindbody. Bundled with payment processing; often overkill and pricey for solo operators.

**Gap we can exploit:** A simple, affordable, mobile-first, non-marketplace booking tool for solo/micro beauty & wellness businesses that does the core job extremely well — without forcing payment processing, marketplace listing, or feature bloat.

---

## 5. Proposed Unique Selling Proposition (USP)

> **"The simplest, most affordable online booking for independent beauty & wellness pros — with a free plan, a beautiful mobile booking page, and no marketplace taking a cut of your clients."**

Key differentiators:
- **Free tier** that actually works for a low-volume solo business (low barrier to start).
- **Mobile-first** booking page designed for smartphone clients.
- **Truly simple** — focused on the core booking job, not feature bloat.
- **Non-marketplace** — the business owns its brand and client relationships (unlike some industry platforms that steer clients to their own marketplace).
- **Fair, flat subscription** — no per-booking commission on the paid plans in the MVP.
- **Set up in minutes** — configure services, staff, hours, get a public URL, and share it immediately.

---

## 6. MVP Feature List

### In scope (MVP — must work)
**Business functionality**
- Business registration (signup)
- Login / logout
- Business profile: name, description, location, timezone, currency
- Business opening hours (per day of week)
- Services: name, price, duration, active/inactive
- Staff members: name, email, phone, active/inactive
- Staff availability (per day of week)
- Appointment calendar view
- Appointment list
- Customer list
- Appointment details
- Cancel appointment
- Reschedule appointment
- Public booking page (`/book/{slug}`)
- Email booking confirmation
- Basic subscription management (free + paid plans)

**Customer functionality (no account required)**
- Open public booking URL
- View business information
- View available services
- Select service
- Select staff member
- Select date
- See available time slots
- Select time
- Enter name, email, phone
- Confirm booking
- Receive confirmation

### Explicitly OUT of scope for MVP (future)
- SMS / WhatsApp notifications
- Online deposits / payments at booking
- Multiple locations
- Advanced analytics
- Loyalty programs
- Mobile apps
- AI features
- Complex integrations
- Marketplace/listing features

> Keeping these out honors **Rule 1 & Rule 11**: do not build future features before the MVP works.

---

## 7. Business Model

- **SaaS subscription** for business owners (the primary paying customer).
- **Customers book for free** — no customer accounts, no customer fees.
- **Flat monthly subscription** by feature/usage tier (not per-booking commission in MVP).
- **Pricing is configuration-driven**, not hard-coded, so tiers and prices can change later.
- Revenue is recurring (MRR), which is attractive for a SaaS model.

**Future revenue opportunities (not built now, but architecture keeps the door open):**
- Premium plans
- SMS/WhatsApp notifications
- Online deposits
- Payment processing at booking
- Additional staff / multiple locations
- Advanced analytics

---

## 8. Pricing Hypothesis

Pricing is stored in a configurable plan structure (not hard-coded), so these are hypotheses to validate, not final figures.

| Plan | Monthly Price | Intended for | Indicative limits |
|------|---------------|--------------|-------------------|
| **Free** | €0 | Solo, low volume | Limited appointments (e.g., 15–30/month), basic booking page, 1 staff |
| **Basic** | ~€9/month | Solo / single operator | More appointments, basic notifications, customer management |
| **Pro** | ~€19/month | Small teams | More staff, advanced features, advanced notifications |

**Testable assumptions:**
- A free tier drives adoption and word-of-mouth.
- Businesses convert to paid when they hit the free appointment limit or need more staff / notifications.
- €9–€19/month is comfortably below the perceived value of "not losing bookings" and "no more double-booking."
- The market is willing to pay a flat subscription instead of a per-booking commission.

> These numbers are hypotheses only. They will be validated via the validation plan and can be adjusted in the configurable plan structure at any time.

---

## 9. Main Risks

### Market risks
- **Low willingness to pay** — Independent pros are price-sensitive; free tier may make them stay free forever.
- **Incumbent lock-in** — Businesses already on Booksy/Fresha/Square may be reluctant to switch.
- **Churn** — Solo operators may book infrequently and question recurring value.
- **Niche too narrow** — Focusing on beauty/wellness may limit TAM (mitigated by design that can generalize later).

### Product/technical risks
- **Complex appointment logic** — Timezones, DST, staff availability, and double-booking prevention are genuinely hard; bugs here destroy trust.
- **Multi-tenant isolation** — Any data leak between businesses is a critical security failure.
- **Missing "must-have" workflow** — e.g., reminders, buffer time, or a specific niche workflow could block adoption.
- **Rate/quality of email delivery** — Confirmation emails landing in spam harms the experience.

### Business risks
- **Stripe/Payment integration complexity** — Webhooks, subscription lifecycle, and PCI considerations add scope.
- **GDPR/compliance** — Handling customer PII (names, emails, phones) carries legal obligations.
- **Building too much** — Scope creep into future features delays a working MVP.

---

## 10. Validation Plan

**Before building (cheap validation):**
1. **Problem interviews (10–15)** — Interview barbers, stylists, nail techs, massage therapists. Confirm: "How do you take bookings today?" "What's your worst scheduling pain?" "How many no-shows per month?" "What do you use now and what do you pay?"
2. **Landing-page / waitlist test** — Build a simple landing page describing the product and pricing; measure signups. Gauge price sensitivity by showing €9/€19.
3. **Competitor teardown** — Map Booksy/Fresha/Square pricing and features to confirm the gap (price, simplicity, no marketplace).
4. **Smoke-test the public URL idea** — Show a mock booking flow to prospects; ask if they'd share it with clients.

**During building (lean validation):**
5. **Pilot / design-partner program** — Recruit 3–5 real businesses to use the MVP free during development in exchange for feedback. This directly targets the "at least 5 real businesses" success criterion.
6. **Track activation** — Measure the % of businesses that complete setup (configure services + hours + get a URL).
7. **Track the core loop** — Does each pilot business get at least one real customer booking through the public URL?

**After MVP (conversion validation):**
8. **Free → paid conversion** — Measure conversion when businesses hit free-plan limits.
9. **Ultimate success test** — Get **at least one real business willing to pay** for the product.

---

## 11. Questions That Must Be Answered Before Development

### Product/business
1. **Niche confirmation** — Is beauty & wellness the right beachhead, or does your network/insight favor another niche (e.g., consultants, tutors, auto-repair)?
2. **Free-tier limits** — Exact free-plan appointment cap and which features are gated (need to finalize before STAGE 10).
3. **Who owns the client relationship** — Confirm we are non-marketplace (business owns clients). Industry platforms may disagree with this positioning.
4. **Currency & geographic focus** — Euro-based (€) implied. Which countries launch first? Single currency per business or multi-currency planning?
5. **Reminders in MVP?** — The spec lists email confirmation; are reminders required for MVP or Stage 9? (Recommend: confirmation required, reminders a Stage 9 addition.)

### Technical/architecture
6. **Email provider** — Which transactional provider (e.g., Resend, Postmark, SES, SendGrid) for the MVP? (Abstraction required regardless.)
7. **Stripe integration** — Confirm Stripe is acceptable and whether any specific country/currency setup is needed for the target market.
8. **Deployment target** — Where will production run (VPS, Railway, Render, Vercel+Fly, Docker compose, etc.)? Affects STAGE 2/12.
9. **Background jobs** — Confirm a background worker (e.g., Celery) is in scope for emails/reminders in the MVP or later.

### Legal/compliance
10. **GDPR scope** — Confirm the target market is EU (triggers GDPR requirements: consent, deletion, data export, retention). This flags areas needing legal review.
11. **Terms/Privacy** — Are placeholders acceptable for MVP with legal review before launch?

---

## Next Step

With confirmation of STAGE 0, the next step is **STAGE 1 — Technical Architecture**:
- `ARCHITECTURE.md`
- `DATABASE.md` (ERD, indexes, constraints, timezone handling, tenant isolation)
- `API.md`

No application code will be written until Stage 2.
