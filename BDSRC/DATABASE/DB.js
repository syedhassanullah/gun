const { default: mongoose } = require("mongoose");
require('dotenv').config(); 

// //Database connection
const dbUri = process.env.MONGO_URI;

mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
})
  
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));


    // Event listener for Mongoose connection
mongoose.connection.on('connected', () => {
    console.log('Now is connected finally to MongoDB!');
  });
  
  // You can also listen to other connection events if needed
  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
  });


module.exports = mongoose.connection;