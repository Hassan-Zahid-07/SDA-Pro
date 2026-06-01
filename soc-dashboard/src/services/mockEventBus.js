export function createEventMessage(type, detail) {
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  return `[${time}] ${type}: ${detail}`;
}

export function simulateObserverEvent(setAuditLogs, message) {
  setAuditLogs((logs) => [message, ...logs].slice(0, 12));
}
