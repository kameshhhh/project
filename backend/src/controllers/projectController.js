const ProjectService = require('../services/projectService');
const { ApiResponse } = require('../utils/response');

class ProjectController {
  static async create(req, res, next) {
    try {
      const project = await ProjectService.createProject({
        name: req.body.name,
        description: req.body.description,
        ownerId: req.user.userId
      });
      return ApiResponse.success(res, project, 'Project created successfully', 201);
    } catch (err) {
      next(err);
    }
  }

  static async list(req, res, next) {
    try {
      const projects = await ProjectService.listProjects(req.user.userId);
      return ApiResponse.success(res, projects, 'Projects retrieved');
    } catch (err) {
      next(err);
    }
  }

  static async getById(req, res, next) {
    try {
      const project = await ProjectService.getProject(req.params.id, req.user.userId);
      return ApiResponse.success(res, project);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ProjectController;
