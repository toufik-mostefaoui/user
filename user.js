const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type:String,
    required: true
  },  
  email: { 
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type:String,
    required:true
  },
  adress: {
    type:String,
    required: true
  },
  image:{
    type:String
  }
});

module.exports = mongoose.model('User', userSchema);