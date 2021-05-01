module.exports = function(sequelize, DataTypes) {
    var Projector = sequelize.define('Projector', {
        model:DataTypes.STRING,
        price:DataTypes.INTEGER
    })

    return Projector
}