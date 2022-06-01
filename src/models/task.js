module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define("task", {
        description: DataTypes.STRING,
        checklistId: DataTypes.STRING
    });

    Task.associate = function(models) {
        Task.belongsTo(models.checklist)
    }

    return Task
};