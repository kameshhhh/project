function dispatchAlert(severity, message) {
  return { id: '490.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
