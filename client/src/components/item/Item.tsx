import { Button, Segment } from 'semantic-ui-react'
import Api from '../../entities/api'
import ModalCreate from '../modalCreate/ModalCreate'
import './item.css'
import item_interface from './I_item'

const api = new Api()

const Item = (props: item_interface) => {
    const { getItems, productActive } = props
    return <Segment color='blue' onClick={() => props.setProduct(props)} className="item_container">
        <div className="round_image" style={{ width: 60, height: 60 }}>
            <img src={`${props.image}`} alt="" />
        </div>
        <div className="item_description">
            <div>
                <h3>{props.name}</h3>
                <div className="text_description">
                    <p>{props.description}</p>
                </div>
            </div>
            <span style={{ fontSize: 15, fontWeight: 'bold' }}>{props.price.toLocaleString('BRL', { style: 'currency', currency: 'BRL' })}</span>
        </div>
        <div className="item_options">
            <ModalCreate
                getItems={getItems}
                edit={true}
                product={productActive} />
            <Button style={{ marginTop: 10 }} content='Delete' inverted color='red' size="tiny" fluid onClick={() => {
                api.deleteItem(props.id).then(() => {
                    getItems()
                })
            }} />
        </div>
    </Segment>
}

export default Item