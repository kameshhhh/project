function dispatchAlert(severity, message) {
  return { id: '239.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
