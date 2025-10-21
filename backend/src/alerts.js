function dispatchAlert(severity, message) {
  return { id: '374.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
