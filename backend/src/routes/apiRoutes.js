const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const ProjectController = require('../controllers/projectController');
const { authenticate } = require('../middleware/authMiddleware');

// Healthcheck
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', uptime: process.uptime(), timestamp: new Date() });
});

// Auth Routes
router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);
router.post('/auth/refresh', AuthController.refresh);

// Projects
router.post('/projects', authenticate, ProjectController.create);
router.get('/projects', authenticate, ProjectController.list);
router.get('/projects/:id', authenticate, ProjectController.getById);

module.exports = router;
