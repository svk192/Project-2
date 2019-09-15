module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define(
    "Book",
    {
      book_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      ISBN_type: {
        type: DataTypes.STRING
      },
      ISBN_ID: {
        type: DataTypes.FLOAT
      },
      pageCount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      smallThumbnail: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Thumbnail: {
        type: DataTypes.STRING,
        allowNull: false
      },
      APIID: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );

  Book.associate = function(models) {
    Book.hasMany(models.userBook);
  };

  return Book;
};
