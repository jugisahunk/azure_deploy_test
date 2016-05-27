var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
});

router.post('/', function(req, res, next){
  console.log("Webhook received!");
  console.log(req.body);
  res.render('index', { title: 'WebHook Info' });
});