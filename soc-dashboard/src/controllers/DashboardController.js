import { lifecycleStates } from '../models/IncidentModel';
import { createEventMessage, simulateObserverEvent } from '../services/mockEventBus';

export function moveIncidentForward(incident, setIncidents, setAuditLogs) {
  const currentIndex = lifecycleStates.indexOf(incident.state);
  const nextState = lifecycleStates[Math.min(currentIndex + 1, lifecycleStates.length - 1)];

  setIncidents((items) =>
    items.map((item) => (item.id === incident.id ? { ...item, state: nextState } : item))
  );

  simulateObserverEvent(
    setAuditLogs,
    createEventMessage('IncidentStateChanged', `${incident.id} moved from ${incident.state} to ${nextState}`)
  );
}

export function executeResponseAction(action, setIncidents, setAuditLogs) {
  const message = `${action.type} executed successfully on ${action.target}`;

  setIncidents((items) =>
    items.map((item) =>
      item.id === 'INC-001' ? { ...item, state: 'Eradication' } : item
    )
  );

  simulateObserverEvent(setAuditLogs, createEventMessage('ResponseActionExecuted', message));
}

export function generateMockAlert(setAlerts, setAuditLogs) {
  const id = `SIM-${Math.floor(Math.random() * 900 + 100)}`;
  const alert = {
    id,
    source: 'Threat Intel Feed',
    type: 'Malicious Indicator Match',
    severity: 'HIGH',
    ip: '198.51.100.24',
    status: 'New',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  setAlerts((items) => [alert, ...items].slice(0, 8));
  simulateObserverEvent(setAuditLogs, createEventMessage('AlertIngested', `New alert ${id} received from Threat Intel Feed`));
}
