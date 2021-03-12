import Product from '../../interfaces/product'
import Item from '../item/Item'
import SearchBar from '../searchBar/SearchBar'
import main_content from './I_mainContent'
import './mainContent.css'
import { Header, Icon } from 'semantic-ui-react'
import ModalCreate from '../modalCreate/ModalCreate'

const renderProducts = (listProducts: Array<Product>, setProduct: Function, productActive: Product, getItems: Function) => {
    return listProducts.map((values) => {
        return <Item key={`${values.id}`} {...values} setProduct={setProduct} productActive={productActive} getItems={getItems}/>
    })
}

const MainContent = (props: main_content) => {
    const { listProducts, setProduct, setProducts, productActive, getItems } = props
    return <div className="main_section fullsize">
        <header>
            <Header as='h2' style={{ marginTop: 30, marginBottom: 30 }}>
                <Icon name='shopping cart' />
                <Header.Content>
                    Product Registration
                <Header.Subheader>Diego jimenes</Header.Subheader>
                </Header.Content>
            </Header>
            <SearchBar setProducts={setProducts} />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <hr style={{ margin: 0, marginTop: 15, width: '70%' }} />
                <ModalCreate getItems={getItems} className="button_create_product_in_main_content" />
            </div>
        </header>
        <section style={{ marginTop: 15 }}>
            {listProducts.length ? renderProducts(listProducts, setProduct, productActive, getItems) : <span>No Products</span>}
        </section>
    </div>
}

export default MainContent