function dispatchAlert(severity, message) {
  return { id: '517.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
