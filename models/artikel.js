'use strict';
module.exports = function(sequelize, DataTypes) {
  var Artikel = sequelize.define('Artikel', {
    jenis_bahasan: DataTypes.STRING,
    keterangan: DataTypes.TEXT,
    BahasaPemrogramanId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    sumber_artikel: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Artikel;
};