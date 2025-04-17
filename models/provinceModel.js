import { Sequelize } from "sequelize";
import db from '../configs/mysql.js'

const { DataTypes } = Sequelize;

const Provinces = db.define('reg_provinces', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    name: DataTypes.STRING
}, {
    freezeTableName: true
})

export default Provinces;
