module.exports = function(sequelize, DataTypes) {
  var userBook = sequelize.define("userBook", {
    userBookID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BookID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  //Check association
  userBook.associate = function(models) {
    userBook.belongsTo(models.User, {
      foreignKey: { allowNull: false }
    });
  };

  return userBook;
};
