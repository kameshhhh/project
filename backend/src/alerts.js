function dispatchAlert(severity, message) {
  return { id: '89.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
