function dispatchAlert(severity, message) {
  return { id: '171.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
