import { useMemo, useState } from 'react';
import OverviewView from './views/OverviewView.jsx';
import AlertStreamView from './views/AlertStreamView.jsx';
import IncidentQueueView from './views/IncidentQueueView.jsx';
import IncidentLifecycleView from './views/IncidentLifecycleView.jsx';
import ResponseActionsView from './views/ResponseActionsView.jsx';
import ThreatIntelView from './views/ThreatIntelView.jsx';
import AuditLogView from './views/AuditLogView.jsx';
import { initialAlerts } from './models/AlertModel.js';
import { initialIncidents } from './models/IncidentModel.js';
import { responseActions } from './models/ResponseActionModel.js';
import { initialAuditLogs } from './models/AuditLogModel.js';
import { executeResponseAction, generateMockAlert, moveIncidentForward } from './controllers/DashboardController.js';

export default function App() {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [incidents, setIncidents] = useState(initialIncidents);
  const [selectedIncidentId, setSelectedIncidentId] = useState(initialIncidents[0].id);
  const [auditLogs, setAuditLogs] = useState(initialAuditLogs);

  const selectedIncident = useMemo(
    () => incidents.find((incident) => incident.id === selectedIncidentId) || incidents[0],
    [incidents, selectedIncidentId]
  );

  return (
    <main className="dashboard-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">SDA-Pro SOC Command Center</p>
          <h1>Security Incident Response & Threat Mitigation Platform</h1>
          <p>
            Real-time dashboard prototype for alert monitoring, incident triage, automated response,
            threat intelligence, and audit visibility.
          </p>
        </div>
        <div className="analyst-card">
          <span>Active Analyst</span>
          <strong>Hassan Zahid</strong>
          <small>SOC Manager · Online</small>
        </div>
      </header>

      <OverviewView />

      <section className="dashboard-grid">
        <AlertStreamView alerts={alerts} onGenerateAlert={() => generateMockAlert(setAlerts, setAuditLogs)} />
        <IncidentQueueView
          incidents={incidents}
          selectedIncident={selectedIncident}
          onSelectIncident={(incident) => setSelectedIncidentId(incident.id)}
        />
        <IncidentLifecycleView
          incident={selectedIncident}
          onAdvance={(incident) => moveIncidentForward(incident, setIncidents, setAuditLogs)}
        />
        <ResponseActionsView
          actions={responseActions}
          onExecute={(action) => executeResponseAction(action, setIncidents, setAuditLogs)}
        />
        <ThreatIntelView />
        <AuditLogView logs={auditLogs} />
      </section>
    </main>
  );
}
