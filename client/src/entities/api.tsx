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

    async deleteItem(id: String) {
        try {
            const products = await axios.post('http://localhost:3000/product/delete', {
                id
            })
            return products.data
        } catch (err) {
            return err
        }
    }

    async editItem(produtc: Product) {
        try {
            const products = await axios.post('http://localhost:3000/product/update', {
                ...produtc
            })
            return products.data
        } catch (err) {
            return err
        }
    }

    async searchItem(search: String) {
        try {
            const products = await axios.post('http://localhost:3000/product/search', {
                search
            })
            return products.data
        } catch (err) {
            return err
        }
    }
}