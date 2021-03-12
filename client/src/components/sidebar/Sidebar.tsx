import { Button } from 'semantic-ui-react'
import Api from '../../entities/api'
import HeaderSideBar from '../headerSideBar/HeaderSideBar'
import ModalCadastro from '../modalCadastro/ModalCadastro'
import side_bar from './I_side_bar'
import './sidebar.css'

const api = new Api()

const SideBar = (props: side_bar) => {
    const { productActive, getItems } = props
    return Object.keys(productActive).length ?
        <div className="side_bar">
            <HeaderSideBar productActive={productActive} getItems={getItems} />
            <hr style={{ width: "70%", margin: 0, marginTop: 10, marginBottom: 10 }} />
            <section className="sidebar_description">
                <div className="round_image" style={{ width: 200, height: 200, margin: "auto", marginTop: 10, marginBottom: 10 }}>
                    <img src={`${productActive.image}`} alt="" />
                </div>
                <h2>Description</h2>
                <span>{productActive.description}</span>
            </section>
            <div style={{ marginLeft: 20, marginTop: 20 }}>
                <ModalCadastro
                    getItems={getItems}
                    edit={true}
                    product={productActive} />
                <Button content='Delete' inverted color='red' size="tiny" onClick={() => {
                    api.deleteItem(productActive.id).then(() => {
                        getItems()
                    })
                }} />
            </div>
        </div>
        : <></>
}

export default SideBar