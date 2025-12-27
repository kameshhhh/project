// Rollup Worker v79.6
const logger = require('../utils/logger');

async function processRollupJob(job) {
  const { projectId, bucket } = job.data;
  logger.info(`Processing analytics rollup for project ${projectId} [bucket ${bucket}]`);
  return { status: 'completed', duration: 42 };
}

module.exports = { processRollupJob };
