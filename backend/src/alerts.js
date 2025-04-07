function dispatchAlert(severity, message) {
  return { id: '12.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
