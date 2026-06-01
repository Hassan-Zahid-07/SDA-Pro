export const initialAlerts = [
  {
    id: 'SENT-ALERT-SIEM-204',
    source: 'Splunk SIEM',
    type: 'Suspicious Login',
    severity: 'HIGH',
    ip: '203.0.113.45',
    status: 'Enriched',
    time: '10:41 AM'
  },
  {
    id: 'FW-204',
    source: 'Palo Alto Firewall',
    type: 'Command & Control Traffic',
    severity: 'CRITICAL',
    ip: '203.0.113.45',
    status: 'Incident Created',
    time: '10:42 AM'
  },
  {
    id: 'EDR-204',
    source: 'CrowdStrike EDR',
    type: 'Endpoint Malware Signal',
    severity: 'HIGH',
    ip: '203.0.113.45',
    status: 'Correlated',
    time: '10:43 AM'
  }
];
