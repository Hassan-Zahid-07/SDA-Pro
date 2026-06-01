import { severityClass } from './viewHelpers';

export default function IncidentQueueView({ incidents, selectedIncident, onSelectIncident }) {
  return (
    <section className="panel">
      <div className="panel-header compact">
        <div>
          <h3>Incident Queue</h3>
          <p>Prioritized incident list for SOC analysts.</p>
        </div>
      </div>
      <div className="incident-list">
        {incidents.map((incident) => (
          <button
            className={`incident-card ${selectedIncident.id === incident.id ? 'active' : ''}`}
            key={incident.id}
            onClick={() => onSelectIncident(incident)}
          >
            <div>
              <strong>{incident.id}</strong>
              <span>{incident.title}</span>
            </div>
            <span className={`badge ${severityClass(incident.severity)}`}>{incident.severity}</span>
            <small>{incident.state}</small>
          </button>
        ))}
      </div>
    </section>
  );
}
