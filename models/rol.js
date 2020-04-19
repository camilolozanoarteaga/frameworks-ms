/*jshintindent:2*/ module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'Rol',

    {
      id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      descripcion: {
        type: DataTypes.CHAR,
        allowNull: false,
        defaultValue: 'nextval(rol_descripcion_seq::regclass)'
      }
    },
    {
      tableName: 'rol',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      schema: 'public',
      classMethods: {
        associate: function(models) {
          models.Rol.hasMany(
            models.Usuario,

            {
              foreignKey: 'id_rol'
            }
          );
        }
      }
    }
  );
};
