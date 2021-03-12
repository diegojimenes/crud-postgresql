import { useEffect, useState } from 'react'
import MainContent from "../../components/mainContent/MainContent"
import SideBar from "../../components/sidebar/Sidebar"
import Api from '../../entities/api'
import './main.css'

const api = new Api()

const Home = () => {
    const [products, setProducts] = useState([])
    const [productActive, setProduct] = useState((products[0] ?? {}))

    const getItems = () => {
        api.listAllItems().then((products) => {
            setProducts(products)
            setProduct(products[0])
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getItems()
    }, [])

    return <div className="container">
        <MainContent listProducts={products} setProduct={setProduct} productActive={productActive} />
        <SideBar productActive={productActive} getItems={getItems}/>
    </div>
}

export default Home