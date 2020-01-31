module.exports = function (sequelize, DataTypes) {
    var Cars = sequelize.define("Cars", {
        name: {
            type: DataTypes.STRING,
        },
        heading: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.BLOB,
        },
        body_type: {
            type: DataTypes.STRING,
        },
        drivetrain: {
            type: DataTypes.STRING,
        },
        uui: DataTypes.STRING,
    });
    return Cars;
};