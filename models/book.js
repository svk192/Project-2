module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    book_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ISBN_type: {
      type: DataTypes.STRING
    },
    ISBN_ID: {
      type: DataTypes.FLOAT
    },
    pageCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true
    },
    smallThumbnail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Thumbnail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    APIID: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },{ freezeTableName: true, timestamps: false })
  Book.associate = function(models) {
    Book.hasMany(models.userBook);
  };
  return Book;
};
