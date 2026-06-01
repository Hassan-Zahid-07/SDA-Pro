import { severityClass } from './viewHelpers';

export default function AlertStreamView({ alerts, onGenerateAlert }) {
  return (
    <section className="panel span-2">
      <div className="panel-header">
        <div>
          <h3>Real-Time Alert Stream</h3>
          <p>Ingested alerts from SIEM, firewall, EDR, and threat intelligence sources.</p>
        </div>
        <button className="secondary-button" onClick={onGenerateAlert}>Simulate Alert</button>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Alert ID</th>
              <th>Source</th>
              <th>Type</th>
              <th>Severity</th>
              <th>IP</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert) => (
              <tr key={alert.id}>
                <td>{alert.id}</td>
                <td>{alert.source}</td>
                <td>{alert.type}</td>
                <td><span className={`badge ${severityClass(alert.severity)}`}>{alert.severity}</span></td>
                <td>{alert.ip}</td>
                <td>{alert.status}</td>
                <td>{alert.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
