var express = require('express');
var router = express.Router();

/* Ci-dessous, récupéré de l'exemple server.js */
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Ci-dessous, les éléments concernant la route donnés par Alexis dans le chat */

router.all('/webhook', function (req, res, next) {
  console.log(req.body);
  switch (req.body.result.action) {

    /* case 'test':
    url = 'https://www.sushishop.fr/fr/all-categories';
    
      request(url, function(error, response, html){
        if(!error){
          var $ = cheerio.load(html);
          res.json({
            speech: 'L\'offre spéciale du moment est ...' + $('h1').text(),
            source: 'webhook'
          })
        }
      });
      break; */

    case 'menu':
    url = 'https://www.sushishop.fr/api/fr/product/';
    
      request(url, function(error, response, html){
        if(!error){
          var $ = cheerio.load(html);
      res.json({
        speech: 'L\'offre spéciale du moment est ...' + $('.category-361').text() + 'qui se compose de ...',
        source: 'webhook'
      });
      break;

    default:
      res.json({
        speech: 'Je n\'ai pas compris votre question',
        source: 'webhook'
      });
  }
});

module.exports = router;