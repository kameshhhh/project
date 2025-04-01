# DevPulse Platform Architecture

## Overview
DevPulse is an enterprise-grade observability and CI/CD event tracker designed for microservice architectures.

### System Components
1. **Core API Gateway**: Express.js with JWT auth and Redis token blacklist.
2. **Telemetry Ingest Worker**: BullMQ job queue handling burst metrics with PostgreSQL batching.
3. **Frontend Dashboard**: React 18 + Vite SPA with real-time SSE & WebSocket feeds.
4. **Storage Layer**: PostgreSQL for relational data, Redis for transient metrics and cache.
