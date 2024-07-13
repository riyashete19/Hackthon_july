const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post("/user/data", async (req, res) => {
    const { uerfullname, useremail, userphone, usercreatedpass, userfinalpass } = req.body;

    if (usercreatedpass !== userfinalpass) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    try {
        const newUser = new User({
            uerfullname,
            useremail,
            userphone,
            usercreatedpass
        });
        
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
