const mongoose = require("mongoose");

mongoose.set({'strictQuery':true})
const connectToMongo =() => mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

module.exports = connectToMongo;
