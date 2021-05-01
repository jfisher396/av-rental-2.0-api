module.exports = function(sequelize, DataTypes) {
    var Screens = sequelize.define('Screens', {
        model:DataTypes.STRING,
        price:DataTypes.INTEGER
    })

    return Screens
}