const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Message, { onDelete: 'CASCADE' });
  };

  User.findByLogin = async (login) => {
    let myUser = await User.findOne({
      where: { username: login },
    });
    if (!myUser) {
      myUser = await User.findOne({
        where: { email: login },
      });
    }
    return myUser;
  };

  return User;
};
export default user;
