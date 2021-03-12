import Product from "../../interfaces/product";

export default interface modal_cadastro {
    getItems: Function,
    edit?: Boolean,
    product?: Product
}