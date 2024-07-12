require("dotenv").config();
const mongoose = require("mongoose");

const db = process.env.DATABASE_API; 



mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => res.json("Database Connected!"))
  .catch((err) => res.json("error", err));
 


 

  