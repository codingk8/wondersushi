var express = require('express');
var router = express.Router();

/* Ci-dessous, récupéré de l'exemple server.js */
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
const json_categories = require('../db/category.json');
const json_products = require('../db/product.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  const kei = json_categories.filter(category => category.id_category == 361); 
  console.log(kei);
  const kei_products = kei[0].products.map(key => json_products.filter(product => product.id_product == key)[0]);

 res.json(kei_products);
});

/* Ci-dessous, les éléments concernant la route donnés par Alexis dans le chat */

const SUSHISHOP_API_CATEGORIES = 'https://www.sushishop.fr/api/fr/category/';


router.all('/webhook', function (req, res, next) {
  console.log(req.body);

  if (req.body.result)

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

      //     case 'menu':
      //     url = 'https://www.sushishop.fr/api/fr/product/';

      //       request(url, function(error, response, html){
      //         if(!error){
      //           var $ = cheerio.load(html);
      //       res.json({
      //         speech: 'L\'offre spéciale du moment est ...' + $('.category-361').text() + 'qui se compose de ...',
      //         source: 'webhook'
      //       });
      //       break;

      //     default:
      //       res.json({
      //         speech: 'Je n\'ai pas compris votre question',
      //         source: 'webhook'
      //       });
      //   }
      // });


      case 'menu':
        //response.json.results[0].formatted_address
        const url = 'https://www.sushishop.fr/fr/all-categories';

        request(url, function (error, response, html) {
          if (!error) {
            var $ = cheerio.load(html);
            res.json({
              speech: 'L offre spéciale du moment est ...' + $('.category-361').text() + 'qui se compose de ...',
              source: 'webhook'
            });
          }
        });
        break;

      default:
        res.json({
          speech: 'Je n ai pas compris votre question',
          source: 'webhook'
        });
    }
});


module.exports = router;