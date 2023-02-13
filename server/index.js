const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectToMongo = require("./db/db");
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
const postRoute = require("./routes/post")
const app = express();
app.use(express.json());
connectToMongo();

app.use('/api/auth',authRoute)
app.use('/api/users',usersRoute)
app.use('/api/post',postRoute)
app.listen(5000, () => {
  console.log("Server connected successfully");
});
