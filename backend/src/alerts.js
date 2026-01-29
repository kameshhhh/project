function dispatchAlert(severity, message) {
  return { id: '557.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
