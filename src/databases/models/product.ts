import { DataTypes, Model, Optional } from "sequelize"
import { sequelizeConnection } from "../../config/connection"

interface ProductAttributes {
  id?: number
  title?: string | null
  price?: number | null
  image?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export interface ProductInput extends Optional<ProductAttributes, 'id'> { }
export interface ProductOutput extends Required<ProductAttributes> { }

export default class Product extends Model<ProductAttributes, ProductInput> implements ProductAttributes {
  public id!: number
  public title!: string
  public price!: number
  public image!: string
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Product.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING
  }
}, {
  timestamps: true,
  sequelize: sequelizeConnection
})