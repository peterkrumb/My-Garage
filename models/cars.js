module.exports = function (sequelize, DataTypes) {
    var Cars = sequelize.define("cars", {
        name: {
            type: DataTypes.STRING,
        },
        year: {
            type: DataTypes.INTEGER,
        },
        bought: {
            type: DataTypes.STRING,
            defaultValue: false
        }
    });
    return Cars;
};