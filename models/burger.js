/*
 a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var table = "burgers";
var burger = {
  selectAll: function (callback) {
    orm.selectAll(table, function (res) {
      callback(res);
    });
  },
  // cols and vals are arrays
  insertOne: function (cols, vals, callback) {
    orm.insertOne(table, cols, vals, function (res) {
      callback(res);
    });
  },
  updateOne: function (objColVals, condition, callback) {
    orm.updateOne(table, objColVals, condition, function (res) {
      callback(res);
    });
  },
  delete: function (condition, callback) {
    orm.delete(table, condition, function (res) {
      callback(res);
    });
  }
};

module.exports = burger;