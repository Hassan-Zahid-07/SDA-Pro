export default function AuditLogView({ logs }) {
  return (
    <section className="panel span-2">
      <div className="panel-header compact">
        <div>
          <h3>Audit Log & Observer Events</h3>
          <p>Immutable-style event evidence from the simulated EventBusPublisher.</p>
        </div>
      </div>
      <div className="audit-log">
        {logs.map((log, index) => (
          <div className="audit-row" key={`${log}-${index}`}>{log}</div>
        ))}
      </div>
    </section>
  );
}
