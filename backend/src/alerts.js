function dispatchAlert(severity, message) {
  return { id: '253.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
