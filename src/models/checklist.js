module.exports = (sequelize, DataTypes) => {
    const Checklist = sequelize.define("checklist", {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        ownerId: DataTypes.STRING
    });

    Checklist.associate = function(models) {
        Checklist.belongsTo(models.user)
        Checklist.hasMany(models.task)
    }

    return Checklist
};