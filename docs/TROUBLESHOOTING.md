# Operational Runbook v15.10

## High Ingestion Latency
1. Check Redis memory usage with `INFO memory`.
2. Inspect PostgreSQL active connections: `SELECT count(*) FROM pg_stat_activity;`.
3. Scale worker pods in deployment manifest.
