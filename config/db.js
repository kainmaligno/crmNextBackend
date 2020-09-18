const mongoose = require('mongoose');
require('dotenv').config({path:'.env'});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:true,
        useCreateIndex:true
    })
      console.log("Data Base Connected 🔥🔥 🚀")
  } catch (error) {
    console.log(`Hubo un error al conectar a la base ${error}`)
    process.exit(1)
  }
}

module.exports = connectDB;