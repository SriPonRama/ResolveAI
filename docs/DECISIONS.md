# Decisions
| # | Decision | Choice | Reason | Status |
|---|---|---|---|---|
| 1 | Frontend | Next.js (App Router, React 19, TypeScript) | Unified codebase, shared types, fast rendering | decided |
| 2 | Backend | Next.js Route Handlers (TypeScript) | Single codebase, zero CORS, full type safety with frontend | decided |
| 3 | Database | SQLite via Prisma ORM (Postgres-ready) | Zero local setup friction, type-safe migrations, easy demo resets | decided |
| 4 | Auth | Secure session cookies (bcrypt + jose) | Tenant-scoped isolation (`merchant_id`), server-side role enforcement | decided |
| 5 | Job queue | DB-backed job queue table with polling worker | Zero extra dependencies (no Redis), atomic with case state | decided |
| 6 | File storage | Local disk storage (`uploads/`) via adapter | Zero credentials needed, swappable to S3/R2 | decided |
| 7 | Email | Console logger / dev preview (swappable to Resend) | Instant feedback in dev/mock mode without delivery latency | decided |
| 8 | LLM used inside the app for classification, vision and drafting | Claude 3.5 Sonnet / GPT-4o (finalize API key at P6.0) | Best-in-class structured output and vision | decided |
| 9 | Hosting | Vercel + Cloudflare Tunnel / ngrok | Fast HTTPS deployment and public webhook tunnel | decided |
| 10 | PayPal mode | mock until credentials exist | No PayPal credentials yet | decided |

Decision 8 is separate from the tools used to build the project (ChatGPT, Antigravity). The finished app needs its own LLM. Choose it before Phase 6.

---
## Stack suggestions from the plan (Merged Plan section 11)
These are suggestions; choose what your team can ship fastest. The principle is to **reuse proven components for auth, storage and email** and spend your effort on the agent and PayPal logic.

| **Layer**       | **Suggestion**                                                                | **Why / note**                                                                                                     |
|-----------------|-------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| Frontend        | Next.js (React, TypeScript) with Tailwind and a component library             | One codebase for landing, auth, merchant portal and customer portal                                                |
| Backend         | FastAPI (Python) or Next.js API routes with TypeScript                        | FastAPI if the team prefers Python for the AI and policy code; one TypeScript stack if you want fewer moving parts |
| Database        | PostgreSQL (or SQLite for the first days)                                     | Relational data with audit requirements                                                                            |
| Auth            | A vetted auth library or managed auth service                                 | Do not hand-roll password storage or sessions                                                                      |
| Background jobs | A simple queue or worker (for example Celery, BullMQ, or a DB-polling worker) | Webhook processing and LLM calls should not block requests                                                         |
| File storage    | S3-compatible object storage or the database provider’s storage               | Photos and evidence documents                                                                                      |
| Email           | A transactional email service; log-to-console in development                  | Verification, magic links, notifications                                                                           |
| LLM             | Claude API with structured output and vision                                  | Classification, claim extraction, photo analysis, message drafting, policy compilation                             |
| PayPal          | REST APIs (Orders/Payments for refunds, Disputes, Webhooks) in sandbox        | Direct REST gives control; PayPal MCP is optional for prototyping                                                  |
| Webhook testing | A tunnelling tool plus PayPal’s webhook simulator                             | PayPal must reach a public HTTPS URL                                                                               |
| Hosting         | Any platform with HTTPS and environment secrets                               | Needed for webhooks in the final demo                                                                              |
