# SOC Web Dashboard Evidence Guide

The React-based SOC Analyst Dashboard is located in `soc-dashboard/`.

## Required screenshots after running the dashboard

Save screenshots in `docs/screenshots/` using these names:

1. `11-dashboard-overview.png` — full dashboard home view with metric cards.
2. `12-dashboard-alert-stream.png` — alert stream showing multiple sources.
3. `13-dashboard-incident-lifecycle.png` — lifecycle tracker showing incident state progression.
4. `14-dashboard-response-actions.png` — response action execution and audit log update.

## How to run

```bash
cd soc-dashboard
npm install
npm run dev
```

Open the Vite URL shown in terminal, usually `http://localhost:5173`.

## Requirement mapping

| Requirement | Dashboard evidence |
|---|---|
| MVC Dashboard | `soc-dashboard/src/controllers`, `models`, and `views` |
| Real-time alert stream | Alert Stream panel and Simulate Alert button |
| Incident queue | Incident Queue panel |
| Incident lifecycle | Lifecycle Tracker panel |
| Response action history | Response Actions and Audit Log panels |
| Observer/Event-Driven updates | `mockEventBus.js` and live audit log messages |
