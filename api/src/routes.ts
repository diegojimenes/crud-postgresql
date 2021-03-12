import express from 'express'
import { ProductController } from './controllers/ProductsController'

const routes = express.Router()

const Product = new ProductController()

routes.get('/product', async (req, res) => Product.index(req, res))

routes.post('/product/search', async (req, res) => Product.search(req, res))

routes.post('/product/create', async (req, res) => Product.store(req, res))

routes.post('/product/delete', async (req, res) => Product.delete(req, res))

routes.post('/product/update', async (req, res) => Product.update(req, res))

export default routes