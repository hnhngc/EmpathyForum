const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Create a new comment
router.post('/create', commentController.create);

// Get all comments
router.get('/', commentController.getAll);

// Get a specific comment by ID
router.get('/:id', commentController.getById);

// Update a comment
router.put('/:id', commentController.update);

// Delete a comment
router.delete('/:id', commentController.delete);

// Like a comment
router.put('/:id/like', commentController.like);

// Dislike a comment
router.put('/:id/dislike', commentController.dislike);

module.exports = router;