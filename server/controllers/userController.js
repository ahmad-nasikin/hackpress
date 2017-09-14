var models = require('../models/User')
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
require('dotenv').config

var signup = (req, res) => {
    let password = req.body.password
    bcrypt.genSalt(10, (errSalt, salt) => {
      bcrypt.hash(password, salt, (errHash, hash) => {
        req.body.password = hash
        models.create({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        })
        .then(data => {
          res.send('Sukses Register Coy')
        })
        .catch(err => {
          res.send({msg: err.message})
        })
      })
    })
  }


module.exports = {
  signup
}
