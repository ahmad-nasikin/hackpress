var express = require('express');
var router = express.Router();
var article = require('../controllers/articleController')

/* GET users listing. */
router.post('/', article.insertArticle)
router.delete('/', article.deleteArticle)
// router.get('/', article.insertArticle)
// router.get('/', article.insertArticle)
// router.get('/', article.insertArticle)


module.exports = router;
