const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Userschema = new Schema({

  _id:String,
  clg:String,     
});

module.exports = mongoose.model('get', Userschema);