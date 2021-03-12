import { Button } from "semantic-ui-react"
import ModalCadastro from "../modalCadastro/ModalCadastro"
import './headerSidebar.css'
import header_side_bar from "./I_header_side_bar"

const HeaderSideBar = (props: header_side_bar) => {
    const { productActive, getItems } = props
    return <div className="header_side_bar">
        <div>
            <h2 style={{ margin: 0 }}>{productActive.name}</h2>
            <span style={{ fontSize: 10, color: '#666' }}>{productActive.price.toLocaleString('BRL', { style: 'currency', currency: 'BRL' })}</span>
        </div>
        <ModalCadastro getItems={getItems} />
    </div>
}

export default HeaderSideBar