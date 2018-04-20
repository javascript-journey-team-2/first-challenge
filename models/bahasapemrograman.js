'use strict';
module.exports = function(sequelize, DataTypes) {
  var BahasaPemrograman = sequelize.define('BahasaPemrograman', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return BahasaPemrograman;
};