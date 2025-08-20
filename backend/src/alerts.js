function dispatchAlert(severity, message) {
  return { id: '263.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
