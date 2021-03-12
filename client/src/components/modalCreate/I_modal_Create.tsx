import Product from "../../interfaces/product";

export default interface modal_create {
    getItems: Function,
    edit?: Boolean,
    product?: Product,
    className?: String
}