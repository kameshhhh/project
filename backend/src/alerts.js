function dispatchAlert(severity, message) {
  return { id: '269.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
