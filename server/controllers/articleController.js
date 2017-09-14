const models = require('../models/Article')


var insertArticle = (req, res) => {
  models.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author
  })
  .then(result => {
    res.send('Sukses insert Artikel')
  })
  .catch(err => {
    res.send(err)
  })
}

var deleteArticle = (req, res) => {
  models.deleteOne({
    _id: req.params.id
  })
  .then(result => {
    res.send('Sukses Delete Artike')
  })
  .catch(err => {
    res.send(err)
  })
}

var getOneArticle = (req, res) => {
  models.findOne({
    _id: req.params.id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

var getAllArticle = (req, res) => {
  models.find({})
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

var updateArticle = (req, res) => {
  models.update({
    _id: req.params.id
  }, {
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author
  })
  .then(result => {
    res.send('Artikel Berhasil diupdate')
  })
  .catch(err => {
    res.send({msg: 'gagal update artikel'})
  })
}

module.exports = {
    insertArticle,
    deleteArticle
    // getOneArticle,
    // getAllArticle,
    // updateArticle
};
