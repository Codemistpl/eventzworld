module.exports = (sequelize, DataTypes) => {
  const create_post = sequelize.define(
    "create_post",
    {
      name: {
        type: DataTypes.STRING,
      },
      eventVenue: {
        type: DataTypes.STRING,
      },
      category:{
        type: DataTypes.STRING,
      },
      eventDate: {
          type: DataTypes.STRING,
        },
        eventTime: {
          type: DataTypes.STRING,
        },
        _lat: {
          type: DataTypes.STRING,
        },
      _lng: {
          type: DataTypes.STRING,
        },
        video:{
          type:DataTypes.STRING,
        },
        image:{
          type:DataTypes.STRING
        },
        audio:{
          type:DataTypes.STRING
        },
        status:{
          type:DataTypes.NUMBER
        },
      
       addres:{
        type:DataTypes.STRING
       },
       text:{
        type:DataTypes.STRING
       }
              
      
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return create_post;
};
