function dispatchAlert(severity, message) {
  return { id: '414.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
