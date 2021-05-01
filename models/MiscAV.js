module.exports = function(sequelize, DataTypes) {
    var MiscAV = sequelize.define('MiscAV', {
        model:DataTypes.STRING,
        price:DataTypes.INTEGER
    })

    return MiscAV
}