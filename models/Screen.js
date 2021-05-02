module.exports = function(sequelize, DataTypes) {
    var Screen = sequelize.define('Screen', {
        model:DataTypes.STRING,
        price:DataTypes.INTEGER
    })

    return Screen
}