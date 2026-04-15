// Metrics Aggregator v112.1
const redis = require('../config/redis');
const db = require('../config/database');

class MetricsAggregator {
  static async calculatePercentiles(projectId, metricName, durationMinutes = 60) {
    const query = `
      SELECT
        percentile_cont(0.50) WITHIN GROUP (ORDER BY metric_value) AS p50,
        percentile_cont(0.95) WITHIN GROUP (ORDER BY metric_value) AS p95,
        percentile_cont(0.99) WITHIN GROUP (ORDER BY metric_value) AS p99,
        AVG(metric_value) AS average_latency,
        COUNT(*) AS total_samples
      FROM metrics
      WHERE project_id = $1 AND metric_name = $2
        AND recorded_at >= NOW() - ($3 || ' minutes')::INTERVAL
    `;
    const res = await db.query(query, [projectId, metricName, durationMinutes]);
    return res.rows[0];
  }
}

module.exports = MetricsAggregator;
