const Comment = require('../models/Comment');

const commentController = {
    create: async (req, res) => {
        try {
            const comment = new Comment(req.body);
            const savedComment = await comment.save();
            res.status(201).json({
                message: 'Comment created successfully',
                comment: savedComment
            });
        } catch (error) {
            console.error('Error creating comment:', error);
            res.status(500).json({
                message: 'Error creating comment: ' + error.message
            });
        }
    },
    getAll: async (req, res) => {
        try {
            const comments = await Comment.find().populate('userId', 'username email fullname');
            res.status(200).json(comments);
        } catch (error) {
            console.error('Error fetching comments:', error);
            res.status(500).json({
                message: 'Error fetching comments: ' + error.message
            });
        }
    },
    getById: async (req, res) => {
        try {
            const comment = await Comment.findById(req.params.id).populate('userId', 'username email fullname');
            if (!comment) {
                return res.status(404).json({
                    message: 'Comment not found'
                });
            }
            res.status(200).json(comment);
        } catch (error) {
            console.error('Error fetching comment:', error);
            res.status(500).json({
                message: 'Error fetching comment: ' + error.message
            });
        }
    },
    update: async (req, res) => {
        try {
            const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!comment) {
                return res.status(404).json({
                    message: 'Comment not found'
                });
            }
            res.status(200).json({
                message: 'Comment updated successfully',
                comment
            });
        } catch (error) {
            console.error('Error updating comment:', error);
            res.status(500).json({
                message: 'Error updating comment: ' + error.message
            });
        }
    }
    ,
    delete: async (req, res) => {
        try {
            const comment = await Comment.findByIdAndDelete(req.params.id);
            if (!comment) {
                return res.status(404).json({
                    message: 'Comment not found'
                });
            }
            res.status(200).json({
                message: 'Comment deleted successfully'
            });
        } catch (error) {
            console.error('Error deleting comment:', error);
            res.status(500).json({
                message: 'Error deleting comment: ' + error.message
            });
        }
    }
    ,
    like: async (req, res) => {
        try {
            const comment = await Comment.findById(req.params.id);
            if (!comment) {
                return res.status(404).json({
                    message: 'Comment not found'
                });
            }
            comment.like += 1;
            await comment.save();
            res.status(200).json({
                message: 'Comment liked successfully',
                comment
            });
        } catch (error) {
            console.error('Error liking comment:', error);
            res.status(500).json({
                message: 'Error liking comment: ' + error.message
            });
        }
    }
    ,
    dislike: async (req, res) => {
        try {
            const comment = await Comment.findById(req.params.id);
            if (!comment) {
                return res.status(404).json({
                    message: 'Comment not found'
                });
            }
            comment.dislike += 1;
            await comment.save();
            res.status(200).json({
                message: 'Comment disliked successfully',
                comment
            });
        } catch (error) {
            console.error('Error disliking comment:', error);
            res.status(500).json({
                message: 'Error disliking comment: ' + error.message
            });
        }
    }
};
module.exports = commentController;