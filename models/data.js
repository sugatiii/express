import { Sequelize} from 'sequelize';
import db from "../config/database.js"

const {DataTypes} = Sequelize;

const product = db.define('data', {
  nama_barang: {
    type: DataTypes.STRING,
  },
  stock: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
export default product