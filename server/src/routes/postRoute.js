const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Create a new post
router.post('/create', postController.create);

// Get all posts
router.get('/', postController.getAll);

// Get a specific post by ID
router.get('/:id', postController.getById);

// Update a post
router.put('/:id', postController.update);

// Delete a post
router.delete('/:id', postController.delete);

module.exports = router;