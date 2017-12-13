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
  /* const kei = json_categories.filter(category => category.id_category == 361);
  console.log(kei);
  const kei_products = kei[0].products.map(key => json_products.filter(product => product.id_product == key)[0]);

  res.json(kei_products);*/


});


router.all('/webhook', function (req, res, next) {
  console.log(req.body);

  if (req.body.result)

    switch (req.body.result.action) {

      case 'offrespeciale':

        const kei = json_categories.filter(category => category.id_category == 361);
        const kei_products = kei[0].products.map(key => json_products.filter(product => product.id_product == key)[0]);

        /* let element;
        for (let index = 0; index < kei_products.length; index++) {
          element += kei_products[index].name+' ';
        } */

        res.json({
          speech: 'L offre spéciale du moment est ' + kei[0].name + ' et elle se compose de ' + kei_products.map(product => product.name).join(' et '),
          source: 'webhook'
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