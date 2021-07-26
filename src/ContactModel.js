const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Userschema = new Schema({

  _id:String,
  lastname:String,
  cno: String,
  subject:String       
});

module.exports = mongoose.model('contactus', Userschema);