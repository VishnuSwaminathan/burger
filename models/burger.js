var orm = require('../config/orm');

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(result) {
      cb(result);
    });
  },
  insert: function(burgerName, cb) {
    orm.insert(burgerName, function(result) {
      cb(result);
    });
  },
  update: function(burger_name, devoured, id, cb) {
    orm.update(burger_name, devoured, id, function(result) {
      cb(result);
    });
  }
};

module.exports = burger;
