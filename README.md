# ⚡ Relay: Trust Infrastructure for Informal Logistics

**Current Status:** Closed Beta (Zimbabwe, with supported corridors to South Africa)
**Version:** v0.1.0-beta.1
**Website:** [https://relay.africa](https://relay.africa)

This repository contains the Relay marketing site — hand-written static HTML, no build step.

---

## The Problem
**Informal commerce in Southern Africa is broken by a lack of trust.**

Every day, thousands of transactions — buying goods, sending parcels, running errands, moving things across the Beitbridge border — happen over WhatsApp and cash. That shadow economy suffers from three failures:

1. **The Payment Standoff:** "I won't pay until I get it" vs. "I won't deliver until you pay."
2. **Ghosting:** Runners disappearing with cash or goods, and clients refusing to pay on delivery.
3. **Identity Blindness:** Hiring strangers with no verified track record, and no way to find them afterwards.

## The Solution: verified identity and a permanent record

Relay is a **zero-custody marketplace**. It replaces the "trust me" handshake with verified identities and an evidence trail.

> **Relay never holds, moves or touches user funds.** Customers pay runners directly, peer to peer, entirely outside the platform. Relay is not a bank, not a payment processor, and not an escrow agent. Its only revenue is a small flat matching fee.

That constraint is deliberate. Holding other people's money is a regulated activity requiring licensing Relay does not have, so Relay's guarantee is not *"your money is safe with us"* — it is *"we make cheating expensive and traceable."*

### Core mechanics (the trust engine)

1. **Identity Verification:** No anonymous runners. Every runner submits a government ID and a selfie, checked by Trust & Safety before they can accept a single job.
2. **Permanent Audit Trail:** GPS check-ins, timestamps, chat history and photographic evidence are recorded per job — and job records cannot be deleted, by anyone, ever.
3. **Reputation Tied to a Real Identity:** A bad actor cannot delete their account and re-register; banned identity documents are hashed and blacklisted.
4. **Dispute Resolution with Evidence:** Either party can dispute; the accused gets 24 hours to respond; a human reviews the record before any determination.
5. **Incident Packets:** Where fraud or theft is substantiated, Relay compiles both parties' verified identity details and the full job record into a packet that can be handed to police — which is more than a victim of an informal courier has today.

---

## Key Features

### For Clients (senders/buyers)
* **Verified Humans:** See a runner's real verification status and track record before they arrive.
* **Live Telemetry:** GPS check-ins while a job is actively in progress.
* **Evidence You Can Act On:** If a job goes wrong, the record exists and can be taken to the police.

### For Runners (earners)
* **You Get Paid Directly:** Cash, mobile money or transfer — whatever you agree. No middleman holding your money.
* **A Record That Follows Them:** A client who refuses to pay gets a permanent mark against a verified identity.
* **Reputation Building:** Every completed run builds a verified track record, including corridor-specific history for cross-border work.

---

## Strategic Roadmap

### Phase 1: Zimbabwe closed beta (current)
* **Objective:** Validate the trust engine in a low-trust, high-informality environment.
* **Geography:** Zimbabwe-primary (Harare, Bulawayo, Mutare), with the Beitbridge → South Africa corridor supported where demand exists.
* **Target:** A small number of verified runners and beta clients.
* **Tech:** Rust backend, Flutter mobile, Google Cloud (Firestore + Cloud Run).
* **Distribution:** Direct signed APK and Firebase App Distribution — not yet on the Play Store.

### Phase 2: Network effect
* **Objective:** Liquidity — bringing existing off-platform WhatsApp volume onto Relay.
* **Expansion:** Additional SADC corridors as verified runner supply allows.

### Phase 3: Partner layer
* **Objective:** Volume, via verified supplier/logistics partners. Requires infrastructure that does not exist yet, and is explicitly out of scope for the beta.

---

## Legal

* [Terms of Service](https://relay.africa/legal) · [Privacy Policy](https://relay.africa/privacy) · [Data & Cookie Policy](https://relay.africa/data-policy) · [EULA](https://relay.africa/eula)
* The `LICENSE` in this repository covers the **source code**. The right to install and run the compiled app is granted separately by the [EULA](https://relay.africa/eula).

---

## Contact & Inquiries
**Alex Matrino** — Founder & Lead Architect
*Contact via private channels only.*

---
*© 2026 Relay. All Rights Reserved.*
