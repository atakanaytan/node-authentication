const express = require('express');
const router   = express.Router();

const userService = require('../services/user');
const authService = require('../services/auth')

router.get('/', (req, res, next) => {
      res.status(200).json(
        {
            message:'Get request'
       });
});

router.delete('/:id', (req, res, next) => {

  userService.deleteUser(req.params.id).then(function(response) {
    res.status(response.code).json(response)
  }).catch(function(error) {
    res.status(error.code).json(error)

  });
});





module.exports = router;
