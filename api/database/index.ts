import { Sequelize } from 'sequelize'
import dbConfig from '../config/database'
import Product from '../src/model/Products'

const connection = new Sequelize(JSON.parse(JSON.stringify(dbConfig)))

Product.initialize(connection)