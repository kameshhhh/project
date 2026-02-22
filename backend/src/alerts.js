function dispatchAlert(severity, message) {
  return { id: '598.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
