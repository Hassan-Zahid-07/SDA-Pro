export const responseActions = [
  {
    name: 'Block IP',
    type: 'BlockIPAction',
    patternEvidence: 'Factory Method + Proxy + Decorator',
    target: '203.0.113.45'
  },
  {
    name: 'Isolate Endpoint',
    type: 'IsolateEndpointAction',
    patternEvidence: 'Strategy + Facade + Decorator',
    target: 'Finance-Workstation-22'
  },
  {
    name: 'Quarantine File',
    type: 'QuarantineFileAction',
    patternEvidence: 'Factory Method + Rollback Decorator',
    target: 'payload.exe'
  },
  {
    name: 'Escalate to Tier-3',
    type: 'EscalateAction',
    patternEvidence: 'Strategy + Notification Factory',
    target: 'Tier-3 Analyst'
  }
];
