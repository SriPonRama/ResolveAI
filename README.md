# ResolveAI
Policy-governed post-purchase resolution agent for PayPal merchants.
LLM reasons, rules decide, humans approve high-risk cases.

## Where to look
- **Start here (prompts and workflow)**: [START-HERE.md](START-HERE.md)
- **Task list in run order (solo)**: [docs/TASKS.md](docs/TASKS.md)
- **Rules for agents**: [.agent/rules/resolveai.md](.agent/rules/resolveai.md)
- **Spec**: `docs/01` to `docs/09`
- **PayPal verified behaviour**: [docs/PayPal-Findings.md](docs/PayPal-Findings.md)
- **Decisions log**: [docs/DECISIONS.md](docs/DECISIONS.md)
- **Original Word files and full Markdown copies**: `docs/source/`

---

## Architecture & Modules
The codebase is structured under `src/` to mirror the architecture in [docs/02-architecture.md](docs/02-architecture.md):
- `src/app/`: Next.js App Router (public landing, auth shells, merchant portal `/app`, customer portal `/c`, and API route handlers)
- `src/lib/`: Cross-cutting utilities (`env.ts` for schema validation, `db.ts` for Prisma client)
- `src/modules/`:
  - `intake/`: Ingest customer complaints & webhooks
  - `classifier/`: LLM-based complaint categorization and claims extraction
  - `connectors/`: Read-only data connectors (PayPal, mock carrier, store DB)
  - `policy-engine/`: Pure code deterministic rule evaluator (zero LLM, fails safe to approval)
  - `risk-scorer/`: Named signal heuristic scoring
  - `cost-advisor/`: Financial comparison across refund, offer, and defend
  - `executor/`: Action executor (the only module with PayPal write credentials)
  - `disputes/`: Dispute evidence mapper & stage-aware submission
  - `comms/`: Customer message drafting from approved facts
  - `audit/`: Append-only audit logger

---

## Run locally

### Prerequisites
- Node.js (v18+ or v20+)
- npm

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
Copy the example environment file:
```bash
cp .env.example .env
```
Default values run in **Mock Mode** with local SQLite (`file:./dev.db`), requiring no external credentials to develop and test.

### 3. Generate Prisma client & initialize database
```bash
npm run db:generate
npm run db:push
```

### 4. Run tests
```bash
npm test
```

### 5. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
Check the health status endpoint at [http://localhost:3000/api/health](http://localhost:3000/api/health).
