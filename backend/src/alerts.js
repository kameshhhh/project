function dispatchAlert(severity, message) {
  return { id: '82.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
