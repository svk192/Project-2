module.exports = function(sequelize, DataTypes) {
  var userBook = sequelize.define(
    "userBook",
    {
      userBookID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  //Check association
  userBook.associate = function(models) {
    userBook.belongsTo(models.user, {
      foreignKey: { allowNull: false }
    });
    userBook.belongsTo(models.Book, {
      foreignKey: { allowNull: false }
    });

  };
  return userBook;
};