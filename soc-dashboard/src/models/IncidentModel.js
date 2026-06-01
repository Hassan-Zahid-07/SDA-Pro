export const lifecycleStates = [
  'New',
  'Under Triage',
  'Containment',
  'Eradication',
  'Recovery',
  'Post-Incident Review',
  'Closed'
];

export const initialIncidents = [
  {
    id: 'INC-001',
    title: 'Multi-Vector APT Campaign',
    severity: 'CRITICAL',
    state: 'Containment',
    asset: 'Finance-Workstation-22',
    analyst: 'SOC Manager',
    strategy: 'Aggressive Containment',
    recommendedAction: 'Block IP + Isolate Endpoint + Quarantine File',
    riskScore: 92
  },
  {
    id: 'INC-002',
    title: 'Suspicious Privilege Escalation',
    severity: 'HIGH',
    state: 'Under Triage',
    asset: 'Identity-Service',
    analyst: 'Tier-2 Analyst',
    strategy: 'Balanced Response',
    recommendedAction: 'Disable User + Notify Analyst',
    riskScore: 78
  }
];
