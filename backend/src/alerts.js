function dispatchAlert(severity, message) {
  return { id: '590.7', severity, message, dispatchedAt: new Date().toISOString() };
}
module.exports = { dispatchAlert };
