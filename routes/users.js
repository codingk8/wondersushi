var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

/* 
{"id_product":"676",
"name":"Salmon Classic",
"description_short":"10 Sushi Saumon",
"customer_group":["3","1","2"],
"price_ttc":"14.9",
"price_ttc_vae":"14.9",
"price_ht":"13.55",
"price_ht_vae":"13.55",
"id_tax":"6",
"id_tax_vae":"6",
"id_category_default":"99",
"has_payment_restrictions":false,
"is_menu":true,
"sidedishes":
[{"id_cross_selling":"1009",
"id_category":"359",
"is_required":false,
"is_free":false,
"is_attached":true,
"is_pack":false,
"quantity_max":1,
"template":"ComponentsVodTemplatesSidedishBlock"}],
"active_cross_selling":true,
"quantity":10,
"link_rewrite":"salmon-classic",
"visibility":{"from":"16:00:01","to":"23:59:59","display_message":false},
"tag":["3"],
"pictures":[{"id_object_picture":"6345","cover":true,"legend":""}],
"pictures_cover":[{"id_object_picture":"6345","cover":true,"legend":""}],
"block_ingredient_1":["1"],"block_ingredient_1_name":"Composition","allergengroup":["7","7"]},
*/