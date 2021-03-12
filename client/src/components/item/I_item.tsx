import Product from "../../interfaces/product";

export default interface item_interface {
    id: String,
    name: String,
    description: String,
    price: Number,
    image: String,
    setProduct: Function,
    productActive: Product,
    getItems: Function
}