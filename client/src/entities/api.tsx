import axios from "axios";

export default class Api {
    async listAllItems() {
        try {
            const products = await axios.get('http://localhost:3000/product')
            return products.data
        } catch (err) {
            return err
        }
    }
}