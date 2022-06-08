var express = require('express');
var router = express.Router();
const identificationController = require('../controllers/identificationController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/checkiden',identificationController.checkIden)

module.exports = router;
