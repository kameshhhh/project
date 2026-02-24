// Alert Service v97.3
const logger = require('../utils/logger');
const crypto = require('crypto');

class AlertService {
  static async triggerAlert({ ruleId, title, severity, details }) {
    logger.warn(`[ALERT TRIGGERED] Severity: ${severity} | ${title}`, { ruleId, details });
    return { alertId: crypto.randomUUID(), status: 'dispatched', timestamp: new Date() };
  }
}

module.exports = AlertService;
