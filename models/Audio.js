module.exports = function(sequelize, DataTypes) {
    var Audio = sequelize.define('Audio', {
        id: { 
            type: DataTypes.INTEGER,
            primaryKey: "true"
        },
        model:DataTypes.STRING,
        price:DataTypes.INTEGER,
        image:DataTypes.STRING,
        description:DataTypes.STRING
    })

    return Audio
}