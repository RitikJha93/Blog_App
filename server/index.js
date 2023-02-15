const express = require("express");
const dotenv = require("dotenv");
var cors = require('cors')
dotenv.config();
const connectToMongo = require("./db/db");
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
const postRoute = require("./routes/post")
const categoriesRoute = require("./routes/categories")
const storage = require('./utils/multer')
const multer = require('multer')
const path = require('path')
const app = express();
app.use(express.json());
app.use('/images', express.static(path.join(__dirname,'/images')))
var corsOptions = {
  origin: ['http://localhost:3000','https://blogappclient.vercel.app'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))


connectToMongo();

const upload = multer({ storage: storage });

app.post('/api/upload', upload.single('file'),(req,res)=>{
  try {
    res.status(200).json('File uploaded successfully')
  } catch (error) {
    res.status(404).json({ message: error})
    console.log(error);
  }
})
app.use('/api/auth',authRoute)
app.use('/api/users',usersRoute)
app.use('/api/post',postRoute)
app.use('/api/categories',categoriesRoute)
app.listen(5000, () => {
  console.log("Server connected successfully");
});
