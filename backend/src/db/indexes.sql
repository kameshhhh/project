-- Index Migration v86.5
CREATE INDEX IF NOT EXISTS idx_metrics_query_composite ON metrics (project_id, metric_name, recorded_at DESC);
CREATE INDEX IF NOT EXISTS idx_users_email_active ON users (email) WHERE role != 'disabled';
