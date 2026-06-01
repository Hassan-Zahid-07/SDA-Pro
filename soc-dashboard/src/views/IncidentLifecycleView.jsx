import { lifecycleStates } from '../models/IncidentModel';

export default function IncidentLifecycleView({ incident, onAdvance }) {
  const currentIndex = lifecycleStates.indexOf(incident.state);

  return (
    <section className="panel span-2">
      <div className="panel-header">
        <div>
          <h3>Incident Lifecycle Tracker</h3>
          <p>State Pattern evidence for {incident.id}: {incident.title}</p>
        </div>
        <button className="primary-button" onClick={() => onAdvance(incident)}>Advance State</button>
      </div>
      <div className="lifecycle">
        {lifecycleStates.map((state, index) => (
          <div className={`state-step ${index <= currentIndex ? 'done' : ''}`} key={state}>
            <span>{index + 1}</span>
            <p>{state}</p>
          </div>
        ))}
      </div>
      <div className="incident-detail-grid">
        <div><span>Asset</span><strong>{incident.asset}</strong></div>
        <div><span>Analyst</span><strong>{incident.analyst}</strong></div>
        <div><span>Strategy</span><strong>{incident.strategy}</strong></div>
        <div><span>Risk Score</span><strong>{incident.riskScore}/100</strong></div>
      </div>
    </section>
  );
}
