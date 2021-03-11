import { Model, DataTypes } from 'sequelize'

export default class Product extends Model {
    static initialize(sequelize): void {
        this.init({
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            price: DataTypes.FLOAT,
            image: DataTypes.STRING
        }, {
            sequelize
        })
    }
}