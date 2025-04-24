const Post = require('../models/Post');

const postController = {    
    create: async (req, res) => {
        try {
            const post = new Post(req.body);
            const savedPost = await post.save();
            res.status(201).json({
                message: 'Post created successfully',
                post: savedPost
            });
        } catch (error) {
            console.error('Error creating post:', error);
            res.status(500).json({
                message: 'Error creating post: ' + error.message
            });
        }
    },
    getAll: async (req, res) => {
        try {
            const posts = await Post.find().populate('authorId', 'username email fullname');
            res.status(200).json(posts);
        } catch (error) {
            console.error('Error fetching posts:', error);
            res.status(500).json({
                message: 'Error fetching posts: ' + error.message
            });
        }
    },
    getById: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id).populate('authorId', 'username email fullname');
            if (!post) {
                return res.status(404).json({
                    message: 'Post not found'
                });
            }
            res.status(200).json(post);
        } catch (error) {
            console.error('Error fetching post:', error);
            res.status(500).json({
                message: 'Error fetching post: ' + error.message
            });
        }
    },
    update: async (req, res) => {
        try {
            const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!post) {
                return res.status(404).json({
                    message: 'Post not found'
                });
            }
            res.status(200).json({
                message: 'Post updated successfully',
                post
            });
        }
        catch (error) {
            console.error('Error updating post:', error);
            res.status(500).json({
                message: 'Error updating post: ' + error.message
            });
        }
    },
    delete: async (req, res) => {
        try {
            const post = await Post.findByIdAndDelete(req.params.id);
            if (!post) {
                return res.status(404).json({
                    message: 'Post not found'
                });
            }
            res.status(200).json({
                message: 'Post deleted successfully'
            });
        } catch (error) {
            console.error('Error deleting post:', error);
            res.status(500).json({
                message: 'Error deleting post: ' + error.message
            });
        }
    }
};
module.exports = postController;