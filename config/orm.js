var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  
  insertOne: function(table, burger) {
    // const burger = {burger_name: "ciao", devoured: 1}
    var queryString = "INSERT INTO ?? SET ? ";
    console.log(queryString);
    connection.query(queryString, [table, burger], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(table, col, newVal, id) {
    var queryString =
      "UPDATE ?? SET ?? = ? WHERE id = ?";
    connection.query(
      queryString,
      [table, col, newVal, id],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
