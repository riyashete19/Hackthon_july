const express = require('express');
const router = express.Router();
const User = require('../models/User');
const RagPicker = require('../models/RagPicker');

router.post("/user/data", async (req, res) => {
    const { userfullname, useremail, userphone, usercreatedpass, userfinalpass } = req.body;

    if (usercreatedpass !== userfinalpass) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    try {
        const newUser = new User({
            userfullname,
            useremail,
            userphone,
            usercreatedpass
        });
        
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: error.message });
    }
});

router.post("/rag-picker/data", async (req, res) => {
    const { ragpickerfullname, ragpickeremail, ragpickerphone, ragpickercreatedpass, ragpickerfinalpass } = req.body;

    if (ragpickercreatedpass !== ragpickerfinalpass) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    try {
        const newRagPicker = new RagPicker({
            ragpickerfullname,
            ragpickeremail,
            ragpickerphone,
            ragpickercreatedpass
        });
        
        await newRagPicker.save();
        res.status(201).json({ message: "Rag Picker registered successfully" });
    } catch (error) {
        console.error('Error registering rag picker:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
