const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Userschema = new Schema({

  _id:String,
  a:String,
  b: String,
  c:String,
  d:String,     
});

module.exports = mongoose.model('counselling', Userschema);