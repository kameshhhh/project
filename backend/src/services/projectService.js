const crypto = require('crypto');
const db = require('../config/database');
const { AppError } = require('../utils/response');

class ProjectService {
  static async createProject({ name, description, ownerId }) {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const apiKey = 'dp_' + crypto.randomBytes(24).toString('hex');

    const result = await db.query(
      `INSERT INTO projects (name, slug, description, owner_id, api_key)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [name, slug, description, ownerId, apiKey]
    );

    return result.rows[0];
  }

  static async listProjects(ownerId) {
    const result = await db.query(
      'SELECT id, name, slug, description, status, created_at FROM projects WHERE owner_id = $1 ORDER BY created_at DESC',
      [ownerId]
    );
    return result.rows;
  }

  static async getProject(projectId, ownerId) {
    const result = await db.query(
      'SELECT * FROM projects WHERE id = $1 AND owner_id = $2',
      [projectId, ownerId]
    );
    if (result.rows.length === 0) throw new AppError('Project not found', 404);
    return result.rows[0];
  }
}

module.exports = ProjectService;
