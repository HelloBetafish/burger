// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("m5odeetxiy3dlwd4", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("m5odeetxiy3dlwd4", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.updateOne("m5odeetxiy3dlwd4", id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;