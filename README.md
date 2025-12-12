# ⚡ Relay: Trust Infrastructure for Informal Logistics

**Current Status:** Live Pilot (Durban, South Africa)  
**Version:** v0.1.0-alpha  
**Website:** [https://yaler.netlify.app](https://yaler.netlify.app)

---

## The Problem
**Informal commerce in Africa is broken by a lack of trust.**

Every day, thousands of transactions in Durban (buying goods, sending parcels, running errands) happen via WhatsApp and cash. This "Shadow Economy" suffers from three critical failures:
1.  **The Payment Standoff:** "I won't pay until I get it" vs. "I won't deliver until you pay."
2.  **Ghosting:** Runners disappearing with cash or goods.
3.  **Identity Blindness:** Hiring strangers with no verified track record.

## The Solution: Relay Protocol
Relay is a **fintech-enabled logistics utility** that replaces the "trust me" handshake with a cryptographic state machine. We provide the security of a bank with the flexibility of a gig app.

### Core Mechanics (The Trust Engine)
1.  **Secure Payment Hold (Auth & Capture):** We utilize Stripe's authorization layer to reserve funds on the customer's card upfront. Money is **never** effectively charged until the job is cryptographically verified.
2.  **Identity Verification:** No anonymous runners. Every participant undergoes strict ID verification before accessing the network.
3.  **Immutable Audit Trail:** We log GPS telemetry, timestamps, and handshake codes. In the event of a dispute, we have a definitive record of reality.

---

## Key Features

### For Clients (Senders/Buyers)
* **Zero-Risk Payments:** If the runner ghosts, the transaction is voided. You pay nothing.
* **Live Telemetry:** Watch your goods move across the map in real-time.
* **Verified Humans:** See the runner's real name and photo before they arrive.

### For Runners (Earners)
* **Guaranteed Settlement:** See that funds are *authorized* before you start your engine. No more "I'll pay you later."
* **Instant Payouts:** Funds are captured and routed to your account immediately upon job completion.
* **Reputation Building:** Every successful run builds a verified credit/trust score.

---

## Strategic Roadmap

### Phase 1: The "Durban Pilot" (Current)
* **Objective:** Validate the "Trust Engine" in a high-crime, low-trust environment.
* **Geography:** Morningside, Berea, Umhlanga, Westville.
* **Target:** 10 Verified Runners, 50 Beta Clients.
* **Tech:** Rust Backend (Stability), Flutter Mobile (Reach), Stripe Connect (Compliance).

### Phase 2: The Network Effect
* **Objective:** Liquidity.
* **Feature:** "Relay Links" allowing runners to send secure payment links to their *existing* WhatsApp clients, bringing off-platform volume onto Relay.
* **Expansion:** Cape Town & Johannesburg.

### Phase 3: The B2B Layer
* **Objective:** Volume.
* **Integration:** API for local e-commerce shops to use Relay as their trusted "Last Mile" fulfillment layer without hiring drivers.

---

## Contact & Inquiries
**Alex Matrino** Founder & Lead Architect  
*Contact via private channels only.*

---
*© 2025 Relay. All Rights Reserved.*