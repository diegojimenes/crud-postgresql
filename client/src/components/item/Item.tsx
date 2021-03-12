import './item.css'
import item_interface from './I_item'

const Item = (props: item_interface) => {
    return <div className="item_container" onClick={() => props.setProduct(props)}>
        <div className="round_image">
            <img src={`${props.image}`} />
        </div>
        <div className="item_description">
            <div>
                <h3>{props.name}</h3>
                <span>{props.description}</span>
            </div>
            <b>{props.price.toLocaleString('BRL', { style: 'currency', currency: 'BRL' })}</b>
        </div>
    </div>
}

export default Item