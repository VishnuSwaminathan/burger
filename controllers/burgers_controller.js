var express = require('express');
var burger = require('../models/burger.js');
var app = express();

app.get('/', function(req, res) {
  burger.selectAll(function(data) {
    res.render('index', { burgers: data });
  });
});

app.post('/', function(req, res) {
  burger.insert(req.body.burger_name, function(result) {
    res.status(200).end();
  });
});

app.put('/', function(req, res) {
  burger.update(req.body.burger_name, req.body.devoured, req.body.id, function(
    result
  ) {
    // if (result.changedRows === 0) {
    //   return res.status(404).end;
    // } else {
    res.status(200).end();
    // }
  });
});

module.exports = app;
