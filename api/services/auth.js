const mongoose = require('mongoose');
const Auth = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {

  loginUser: function(user) {
    return new Promise((resolve, reject) => {
      Auth.find({email: user.email}).exec().then(foundUser => {
        if (foundUser.length < 1) {
          reject({code: 401, message: "auth failed"});
        }
        bcrypt.compare(user.password, foundUser[0].password, (err, result) => {
          if (err) {
            reject({code: 401, message: "auth failed"});
        }
        if (result) {
        const token = jwt.sign({
            email:  foundUser[0].email,
            userId:  foundUser[0]._id
          },
          process.env.JWT_KEY,
        {
          expiresIn:"1h"
        }
      );
           resolve({code: 200, message: 'Auth succcesful', token: token });
        }
      });

      //****************************************
    }).catch(err => {
      console.log( 'error', err)
        reject({code: 500, error: err})
      });

});
}
}
