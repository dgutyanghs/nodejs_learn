// var express = require('express');
// var router = express.Router();

module.exports = function(app) {
    app.get('/', function (req, res) {
        res.render('index', {title:'express'});
    });

    app.get('/nswbmw', function(req, res, next) {
        res.render('index', { title: 'hello world' });
    });
};

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/nswbmw', function(req, res, next) {
//     res.render('index', { title: 'hello world' });
// });

// module.exports = router;
