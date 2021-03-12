import { Op } from 'sequelize'
import Product from '../model/Products'

export class ProductController {
    async index(_, res): Promise<JSON> {
        try {
            const products = await Product.findAll()
            return res.json(products)
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    async search(req, res): Promise<JSON> {
        const { search } = req.body
        try {
            const products = await Product.findAll({
                where: {
                    name: {
                        [Op.substring]: `%${search}`
                    }
                }
            })
            return res.json(products)
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    async store(req, res): Promise<JSON> {
        const { id, name, description, price, image } = req.body
        try {
            const product = await Product.create({
                id,
                name,
                description,
                price,
                image
            })

            return res.json(product)
        } catch (err) {
            return res.status(500).json(err)
        }
    }
    async update(req, res): Promise<JSON> {
        const { id } = req.body
        try {
            await Product.update({
                ...req.body
            }, {
                where: {
                    id: {
                        [Op.eq]: id
                    }
                }
            })

            return res.json({ res: `product ${id} was be updated` })
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    async delete(req, res): Promise<JSON> {
        try {
            const { id } = req.body
            await Product.destroy({
                where: {
                    id: {
                        [Op.eq]: id
                    }
                }
            })
            return res.json({ res: `product ${id} was be deleted` })
        } catch (err) {
            return res.status(500).json(err)
        }
    }
}