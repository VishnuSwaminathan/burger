var connection = require('./connection.js');

var orm = {
  selectAll: function(cb) {
    var queryString = 'SELECT * FROM burgers';
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insert: function(burger_name, cb) {
    var queryString =
      'INSERT INTO burgers (burger_name, devoured) VALUES (?, 0)';
    connection.query(queryString, [burger_name], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  update: function(burger_name, devoured, id, cb) {
    var queryString =
      'UPDATE burgers SET burger_name = ?, devoured = ? WHERE id=?';
    connection.query(queryString, [burger_name, devoured, id], function(
      err,
      result
    ) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};
module.exports = orm;
