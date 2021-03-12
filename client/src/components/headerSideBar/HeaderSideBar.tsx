import ModalCreate from "../modalCreate/ModalCreate"
import './headerSidebar.css'
import header_side_bar from "./I_header_side_bar"

const HeaderSideBar = (props: header_side_bar) => {
    const { productActive, getItems } = props
    return <div className="header_side_bar">
        <div>
            <h2 style={{ margin: 0 }}>{productActive?.name ?? "Product"}</h2>
            {productActive?.price ? <span style={{ fontSize: 10, color: '#666' }}>{productActive.price.toLocaleString('BRL', { style: 'currency', currency: 'BRL' })}</span> : <></>}
        </div>
        <ModalCreate getItems={getItems} />
    </div>
}

export default HeaderSideBar