module.exports = function(sequelize, DataTypes) {
    var Audio = sequelize.define('Audio', {
        model:DataTypes.STRING,
        price:DataTypes.INTEGER,
        image:DataTypes.STRING,
        description:DataTypes.STRING
    })

    return Audio
}