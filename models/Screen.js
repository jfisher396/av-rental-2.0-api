module.exports = function (sequelize, DataTypes) {
  var Screen = sequelize.define("Screen", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: "true",
    },
    model: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
  });

  return Screen;
};
