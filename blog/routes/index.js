// var express = require('express');
// var router = express.Router();

module.exports = function(app) {
    app.get('/', function (req, res) {
        res.render('index', {title:'main page'});
    });

    app.get('/reg', function (req, res) {
        res.render('index', {title:'register'});
    });

    app.post('/reg', function (req, res) {
        res.render('index', {title:'register'});
    });

    app.get('/login', function(req, res) {
        res.render('login', {title:'login'});
    });

    app.post('/login', function(req, res) {
    });

    app.get('/post', function(req, res) {
        res.render('post', {title:'compose'});
    });
    app.post('/post', function(req, res) {

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
