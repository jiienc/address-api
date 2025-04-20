import { Sequelize } from "sequelize";
import db from "../configs/mysql.js";

const { DataTypes } = Sequelize;

const Regencies = db.define(
  "reg_regencies",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    province_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Regencies;
