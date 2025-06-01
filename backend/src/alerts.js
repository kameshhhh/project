function dispatchAlert(severity, message) {
  return { id: '114.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
