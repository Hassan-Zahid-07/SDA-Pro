export default function ThreatIntelView() {
  return (
    <section className="panel threat-panel">
      <div className="panel-header compact">
        <div>
          <h3>Threat Intelligence</h3>
          <p>Adapter + Proxy evidence for external intelligence providers.</p>
        </div>
      </div>
      <div className="intel-score">
        <span>92</span>
        <p>Malicious Reputation Score</p>
      </div>
      <div className="intel-list">
        <p><strong>Indicator:</strong> 203.0.113.45</p>
        <p><strong>Provider:</strong> VirusTotal + MISP</p>
        <p><strong>Cache:</strong> Hit through CachingThreatIntelProxy</p>
        <p><strong>Verdict:</strong> Command-and-control infrastructure</p>
      </div>
    </section>
  );
}
