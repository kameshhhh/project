function dispatchAlert(severity, message) {
  return { id: '191.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
