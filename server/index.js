const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectToMongo = require("./db/db");
const auth = require("./routes/auth")
const app = express();
app.use(express.json());
connectToMongo();

app.use('/api',auth)
app.listen(5000, () => {
  console.log("Server connected successfully");
});
