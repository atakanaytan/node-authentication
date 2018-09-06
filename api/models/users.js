const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authSchema = new Schema({
  
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    Required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: {
    type: String,
    Required: true
  },
  name: {
    type: String,
    Required: true
  },
  surname: {
    type: String,
    Required: true
  }
});

const Auth = mongoose.model('auth', authSchema);
module.exports = Auth;
