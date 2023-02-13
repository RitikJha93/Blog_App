const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectToMongo = require("./db/db");
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
const postRoute = require("./routes/post")
const categoriesRoute = require("./routes/categories")
const storage = require('./utils/multer')
const multer = require('multer')
const app = express();
app.use(express.json());
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
