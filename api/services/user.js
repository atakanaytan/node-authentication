const mongoose = require('mongoose');
const Auth = require('../models/users');
const bcrypt = require('bcrypt');

module.exports = {
  listUsers: function (filter) {},
  getUser: function (id) {},

  createUser: function (user) {

    return new Promise((resolve, reject) => {
      Auth.find({email: user.email}).exec().then(foundUser => {
        if (foundUser.length >= 1) {
          resolve({code: 409, message: "Mail is exist"});
        } else {

          bcrypt.hash(user.password, 10, (err, hash) => {
            if (err) {
              reject( {code: 500, error: 'Hash error'});
            } else {

              const auth = new Auth({_id: new mongoose.Types.ObjectId(), email: user.email, password: hash, name: user.name, surname: user.surname});
              auth.save().then(result => {
                console.log(result);
                resolve( {code: 201, message: 'User created'});
              }).catch(err => {
                console.log(err)
                reject(  {code: 500, error: err});
              });
            }
          });

        }
      }).catch(err => {
        reject(  {code: 500, error: err})
      });
    })
  },

  updateUser: function (user) {},

  deleteUser: function (userId) {
    return Auth.remove({ _id: userId})
          .exec()
          .then(result => {
              return {
                code:200,  message: 'user  deleted'
              };
          })
          .catch(err => {
              console.log(err);
              return { code: 500, error: err
              };
          });


  }


}
