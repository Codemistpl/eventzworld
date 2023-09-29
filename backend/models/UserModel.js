module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("User", {
        name: {
          type: DataTypes.STRING,
          // allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          // allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          // allowNull: false,
        },
        Role:{
          type: DataTypes.STRING,
        },
        _lat: {
          type: DataTypes.STRING,
          // allowNull: false,
        },
        _lng: {
          type: DataTypes.STRING,
          // allowNull: false,
        },
        addres: {
          type: DataTypes.STRING,
          // allowNull: false,
        },
        fb_id: {
          type:DataTypes.STRING,
        },
        accessToken: {
            type:DataTypes.STRING,
          },
      });
      

	return Users;
};
