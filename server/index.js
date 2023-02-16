const express = require("express");
const dotenv = require("dotenv");
var cors = require('cors')
dotenv.config();
const connectToMongo = require("./db/db");
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
const postRoute = require("./routes/post")
const categoriesRoute = require("./routes/categories")
const uploadRoutes = require("./routes/uploadRoutes")
const app = express();
app.use(express.json({limit:'25mb'}));
app.use(express.urlencoded({limit:'25mb',extended:true}));
var corsOptions = {
  origin: ['http://localhost:3000','https://blogappclient.vercel.app'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))


connectToMongo();
app.use('/api/upload',uploadRoutes)
app.use('/api/auth',authRoute)
app.use('/api/users',usersRoute)
app.use('/api/post',postRoute)
app.use('/api/categories',categoriesRoute)
app.listen(5000, () => {
  console.log("Server connected successfully");
});
