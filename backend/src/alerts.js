function dispatchAlert(severity, message) {
  return { id: '150.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
