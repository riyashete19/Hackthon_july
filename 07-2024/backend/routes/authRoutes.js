const express = require('express');
const router = express.Router();
const User = require('../models/User');
const RagPicker = require('../models/RagPicker');

// User Login endpoint
router.post('/user/data/login', async (req, res) => {
    const { useremail, usercreatedpass } = req.body;

    try {
        const user = await User.findOne({ useremail, usercreatedpass });

        if (user) {
            res.json({ success: true, user });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// User registration endpoint
router.post('/user/data/register', async (req, res) => {
    const { userfullname, useremail, userphone, usercreatedpass, userfinalpass } = req.body;

    if (usercreatedpass !== userfinalpass) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        const existingUser = await User.findOne({ useremail });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const newUser = new User({
            userfullname,
            useremail,
            userphone,
            usercreatedpass
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Rag Picker Login endpoint
router.post('/rag-picker/data/login', async (req, res) => {
    const { ragpickeremail, ragpickercreatedpass } = req.body;

    try {
        const ragPicker = await RagPicker.findOne({ ragpickeremail, ragpickercreatedpass });

        if (ragPicker) {
            res.json({ success: true, ragPicker });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Rag Picker registration endpoint
router.post('/rag-picker/data/register', async (req, res) => {
    const { ragpickerfullname, ragpickeremail, ragpickerphone, ragpickercreatedpass, ragpickerfinalpass } = req.body;

    if (ragpickercreatedpass !== ragpickerfinalpass) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        const existingRagPicker = await RagPicker.findOne({ ragpickeremail });
        if (existingRagPicker) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const newRagPicker = new RagPicker({
            ragpickerfullname,
            ragpickeremail,
            ragpickerphone,
            ragpickercreatedpass
        });

        await newRagPicker.save();
        res.status(201).json({ message: 'Rag Picker registered successfully' });
    } catch (error) {
        console.error('Error registering rag picker:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
