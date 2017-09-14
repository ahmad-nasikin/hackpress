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


  var signin = (req, res) => {
    models.findOne({
      username: req.body.username
    })
    .then(result => {
      if (result != null) {
        console.log('ini result', result);
        let password = req.body.password
        if (bcrypt.compareSync(password, result.password)) {
          var token = jwt.sign({
            id: result._id,
            username: result.username,
            email: result.email
          }, process.env.SECRET_KEY)
          res.send({
            msg: 'sukses login',
            token: token
          })
        } else {
          res.send('pass salah')
        }
      } else {
        res.send('data tidak ada')
      }
    })
    .catch(err => {
      res.send(err)
    })
  }

  var getAllUser = (req, res) => {
    models.find()
    .then(result => {
      res.send(resul)
    })
    .catch(err => {
      res.send(err)
    })
  }


module.exports = {
  signup,
  signin,
  getAllUser
}
