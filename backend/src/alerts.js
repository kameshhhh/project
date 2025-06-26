function dispatchAlert(severity, message) {
  return { id: '161.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
