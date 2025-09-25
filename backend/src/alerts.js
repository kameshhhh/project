function dispatchAlert(severity, message) {
  return { id: '329.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
