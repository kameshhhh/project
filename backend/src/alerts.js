function dispatchAlert(severity, message) {
  return { id: '248.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
