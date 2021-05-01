module.exports = function(sequelize, DataTypes) {
    var Audio = sequelize.define('Audio', {
        model:DataTypes.STRING,
        price:DataTypes.INTEGER
    })

    return Audio
}