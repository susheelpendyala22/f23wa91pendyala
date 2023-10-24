var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

app.listen(3001, function () {
  console.log('Example app listening on port ' + port + '!');
});
