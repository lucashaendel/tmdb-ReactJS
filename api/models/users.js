const S = require("sequelize");
const { Model } = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class User extends Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }

  async validatePassword(password) {
    return this.hash(password, this.salt).then(
      (newHash) => newHash === this.password
    );
  }
}

User.init(
  {
    fullName: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
    },
    userName: {
      type: S.STRING,
      allowNull: false,
    },
    country: {
      type: S.STRING,
      allowNull: false,
    },
    year: {
      type: S.INTEGER,
      allowNull: false,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    salt: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "user",
  }
);

User.beforeCreate(async (user) => {
  const salt = bcrypt.genSaltSync(8);
  user.salt = salt;

  return user.hash(user.password, user.salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = User;
