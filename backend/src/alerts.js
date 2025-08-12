function dispatchAlert(severity, message) {
  return { id: '247.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
