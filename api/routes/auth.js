const express = require('express');
const router  = express.Router();

const userService = require('../services/user');
const authService = require('../services/auth');

router.get('/', (req, res, next) => {
      res.status(200).json(
        {
            message:'Get request'
       });
});

  router.post('/register', (req, res, next) => {
    var user = {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      surname: req.body.surname,
    }


    userService.createUser(user)
      .then(response => {

           res.status(response.code).json(response);
      })
      .catch(err => {

          res.status(err.code).json(err);
      })

});
router.get('/register', (req, res, next) =>{
res.render('register');

});

/*index.get('/', function (req, res) {
    res.render('login');
});
*/
    router.post('/login', (req, res, next) =>{
      var user = {
        email: req.body.email,
        password: req.body.password
      }

      authService.loginUser(user)
        .then(response => {

                 res.status(response.code).json(response);
            })
            .catch(err => {

                res.status(err.code).json(err);
            })
    });

      router.get('/login', (req, res, next) =>{
    res.render('login');

    });



module.exports = router;
