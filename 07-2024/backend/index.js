require("dotenv").config();
require("./config/dbconfig");
const express = require("express");
const cors = require("cors");
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

app.use(cors({
    origin: "https://july-hackthon-frontend.vercel.app", 
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json("server start");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
});
