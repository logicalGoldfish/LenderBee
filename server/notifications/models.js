module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Notification', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
  }, {
    classMethods: {
      associate: function (models) {
        models.Item.belongsToMany(models.User, {foreignKey: 'itemreq_id', through: Notification});
        // FUCK THIS DO DIRTY WAY
      }
    }
  });
}
