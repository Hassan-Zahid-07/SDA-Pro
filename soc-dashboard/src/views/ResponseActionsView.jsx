export default function ResponseActionsView({ actions, onExecute }) {
  return (
    <section className="panel">
      <div className="panel-header compact">
        <div>
          <h3>Response Actions</h3>
          <p>Facade coordinates Strategy, Factory, Decorator, and Proxy execution.</p>
        </div>
      </div>
      <div className="action-stack">
        {actions.map((action) => (
          <button className="action-button" key={action.type} onClick={() => onExecute(action)}>
            <strong>{action.name}</strong>
            <span>{action.target}</span>
            <small>{action.patternEvidence}</small>
          </button>
        ))}
      </div>
    </section>
  );
}
