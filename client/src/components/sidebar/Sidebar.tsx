import HeaderSideBar from '../headerSideBar/HeaderSideBar'
import side_bar from './I_side_bar'
import './sidebar.css'

const SideBar = (props: side_bar) => {
    const { productActive } = props
    return Object.keys(productActive).length ?
        <div className="side_bar">
            <HeaderSideBar productActive={productActive} />
            <hr />
            <section className="sidebar_description">
                <h2>Description</h2>
                <span>{productActive.description}</span>
            </section>
        </div>
        : <></>

}

export default SideBar