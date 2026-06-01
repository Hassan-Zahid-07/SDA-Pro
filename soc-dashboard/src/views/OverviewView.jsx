import { Activity, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

const cards = [
  { label: 'Total Alerts', value: '128', icon: Activity, tone: 'blue' },
  { label: 'Critical Incidents', value: '06', icon: AlertTriangle, tone: 'red' },
  { label: 'Actions Executed', value: '24', icon: Zap, tone: 'yellow' },
  { label: 'Threat Intel Matches', value: '17', icon: ShieldCheck, tone: 'green' }
];

export default function OverviewView() {
  return (
    <section className="overview-grid">
      {cards.map(({ label, value, icon: Icon, tone }) => (
        <article className={`metric-card ${tone}`} key={label}>
          <div>
            <p>{label}</p>
            <h2>{value}</h2>
          </div>
          <Icon size={30} />
        </article>
      ))}
    </section>
  );
}
