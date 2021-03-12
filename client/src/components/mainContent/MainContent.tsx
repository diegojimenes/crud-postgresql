import Product from '../../interfaces/product'
import Item from '../item/Item'
import SearchBar from '../searchBar/SearchBar'
import main_content from './I_mainContent'
import './mainContent.css'

const renderProducts = (listProducts: Array<Product>, setProduct: Function) => {
    return listProducts.map((values) => {
        return <Item key={`${values.id}`} {...values} setProduct={setProduct} />
    })
}

const MainContent = (props: main_content) => {
    const { listProducts, setProduct, productActive } = props
    return <div className={`main_section ${!Object.keys(productActive).length ? 'fullsize' : ''}`}>
        <header>
            <h1>Products</h1>
            <SearchBar />
            <hr style={{ margin: 0, marginTop: 15, width: '70%' }} />
        </header>
        <section style={{ marginTop: 15 }}>
            {listProducts.length ? renderProducts(listProducts, setProduct) : <span>No Products</span>}
        </section>
    </div>
}

export default MainContent