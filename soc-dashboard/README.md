# SDA-Pro SOC Analyst Dashboard

This folder contains a React-based SOC Analyst Dashboard prototype for the SDA-Pro project.

## Purpose

The dashboard provides frontend evidence for the MVC and Event-Driven architecture requirements. It visualizes the same incident response workflow implemented in the Java backend prototype.

## MVC Mapping

| MVC Layer | Folder | Responsibility |
|---|---|---|
| Model | `src/models/` | Alerts, incidents, audit logs, response actions, and dashboard metrics |
| View | `src/views/` | UI components for alert stream, incident queue, lifecycle, threat intel, and audit log |
| Controller | `src/controllers/` | Analyst actions, event simulation, incident state updates, and response execution |
| Services | `src/services/` | Mock event bus that simulates Observer/Event-Driven updates |

## Features

- Real-time SOC overview metrics
- Alert stream from Splunk SIEM, Palo Alto Firewall, and CrowdStrike EDR
- Incident queue with severity and lifecycle state
- Incident lifecycle tracker: New → Triage → Containment → Eradication → Recovery → Review → Closed
- Response action execution panel
- Threat intelligence reputation panel
- Audit log showing Observer/EventBus-style updates

## How to Run

```bash
cd soc-dashboard
npm install
npm run dev
```

Then open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## Academic Evidence

This dashboard supports the following SDA-Pro requirements:

- SOC Analyst Dashboard using MVC
- Real-time alert stream
- Incident queue
- Response action history
- Observer/Event-Driven updates
- Analyst-triggered response actions
