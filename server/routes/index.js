var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('The basic GET method works!');
  res.json({ msg: "im Here" });
  // res.render('index', { title: 'Express' });
});

module.exports = router;
