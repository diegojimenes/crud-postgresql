import Product from "../../interfaces/product";

export default interface main_content {
    listProducts: Array<Product>,
    setProduct: Function,
    setProducts: Function,
    getItems: Function,
    productActive: Product
}