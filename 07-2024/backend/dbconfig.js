require("dotenv").config();
const mongoose = require("mongoose");

const db = process.env.DATABASE_API; 



mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Database Connected!"))
  .catch((err) => console.log("error", err));
 


 

  