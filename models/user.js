module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define(
    "user",
    {
      user_ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  user.associate = function(models) {
    user.hasMany(models.userBook);
  };
  return user;
 };