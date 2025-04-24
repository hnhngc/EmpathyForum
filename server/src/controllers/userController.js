const User = require('../models/User');

const userController = {
    register: async (req, res) => {
        try {
            const existingUser = await User.findOne({
                $or: [
                    { email: req.body.email },
                    { username: req.body.username }
                ]
            });

            if (existingUser) {
                return res.status(400).json({
                    message: 'Username or email already exists'
                });
            }

            const user = new User(req.body);
            const savedUser = await user.save();

            res.status(201).json({
                message: 'User created successfully',
                user: {
                    username: savedUser.username,
                    email: savedUser.email,
                    fullname: savedUser.fullname
                }
            });
        } catch (error) {
            console.error('Error saving user:', error);
            res.status(500).json({
                message: 'Error creating user: ' + error.message
            });
        }
    },

    signIn: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                console.log('User not found:', req.body.email);
                return res.status(404).json({
                    message: 'User not found'
                });
            }
            // Check password
            if (user.password !== req.body.password) {
                console.log('Incorrect password for user:', req.body.email);
                return res.status(401).json({
                    message: 'Incorrect password'
                });
            }
            console.log('User signed in successfully:', user.email);
            res.status(200).json({
                message: 'Sign-in successful',
                user: {
                    username: user.username,
                    email: user.email,
                    fullname: user.fullname
                }
            });

        } catch (error) {
            console.error('Error during sign-in:', error);
            res.status(500).json({
                message: 'Error during sign-in: ' + error.message
            });
        }
    }
};

module.exports = userController;