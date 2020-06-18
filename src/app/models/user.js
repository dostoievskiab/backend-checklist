module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user",{
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        passwordhash: DataTypes.STRING,
    });
    
    return User
};