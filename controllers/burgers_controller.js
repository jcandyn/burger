/*
create all the functions that do the routing for the app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

router.get('/burgers', function (req, res) {

  burger.selectAll(function (data) {
    var hbsObject = { burgers: data };
    res.render('index', hbsObject);
  });
});

router.post('/burgers/insertOne', function (req, res) {
  burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, false], function () {
    console.log("in callback");
    res.redirect('/burgers');
  });
});

router.put('/burgers/updateOne/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({ devoured: req.body.devoured }, condition, function () {
    res.redirect('/burgers');
  });
});

router.delete('/burgers/delete/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;
  burger.delete(condition, function () {
    res.redirect('/burgers');
  });
});

module.exports = router;