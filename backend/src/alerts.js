function dispatchAlert(severity, message) {
  return { id: '548.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
