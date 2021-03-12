import axios from "axios";
import Product from "../interfaces/product";

export default class Api {
    async listAllItems() {
        try {
            const products = await axios.get('http://localhost:3000/product')
            return products.data
        } catch (err) {
            return err
        }
    }

    async createItem(produtc: Product) {
        try {
            const products = await axios.post('http://localhost:3000/product/create', {
                ...produtc
            })
            return products.data
        } catch (err) {
            return err
        }
    }
}