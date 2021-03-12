import './modalCreate.css'
import { Button, Modal, Form } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import modal_create from './I_modal_Create';
import Api from '../../entities/api';
import { v4 as uuid } from 'uuid'

const randomImages = [
    'https://s2.glbimg.com/5IEojOCGN6bgFV5L2K_RKB5dtvk=/e.glbimg.com/og/ed/f/original/2020/03/31/cat-4548812_960_720.jpg',
    'https://static.poder360.com.br/2020/10/gato-animal-covid-19-868x644.jpg',
    'https://emc.acidadeon.com/dbimagens/gatos_rua_1024x576_04082020195422.jpg',
    'https://www.petz.com.br/blog/wp-content/uploads/2017/04/comportamento-dos-gatos-1.jpg',
    'https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/saude/Tarzan.jpg',
    'http://www.agenciabrasilia.df.gov.br/wp-conteudo/uploads/2017/01/gato-animais-domesticos-adocao-zoonose-gabriel-jabur--1024x683.jpg',
    'https://meupet.elanco.com/sites/g/files/adhwdz661/files/styles/paragraph_image/public/2020-07/gato_malhado_azul_maine_cool_no_quintal_rodeado_por_flores_amarelas_no_gramado.jpg?itok=fUTBtgXC',
    'https://catracalivre.com.br/wp-content/uploads/2019/07/gato-beber-agua.jpg',
    'https://imagens.brasil.elpais.com/resizer/_FujznijS9KI8idKCpDzRe50SZ8=/394x295/cloudfront-eu-central-1.images.arcpublishing.com/prisa/AEDPFJJ5GE4UCMHB2QR64ZXN4E.jpg',
    'https://buono.pet/wp-content/uploads/2019/09/gato-catnip-erva-dos-gatos-e1568670656530-744x418.jpg'
]

const api = new Api()

const ModalCreate = (props: modal_create) => {
    const [product, setProduct] = useState({
        id: uuid(),
        name: "",
        description: "",
        price: 0,
        image: randomImages[Math.floor(Math.random() * 11)],
    })
    const [open, setOpen] = useState(false)
    const [load, setLoad] = useState(false)

    useEffect(() => {
        if (props.product) {
            setProduct(JSON.parse(JSON.stringify(props.product)))
        }
    }, [props.product])

    const handleProduct = (key: string, value: any) => setProduct({ ...product, [key]: value })

    const resetFields = () => {
        setProduct({
            id: uuid(),
            name: "",
            description: "",
            price: 0,
            image: randomImages[Math.floor(Math.random() * 11)],
        })
    }

    const submitProduct = () => {
        setLoad(true)
        const productObject = {
            ...product,
            price: product.price > 0 ? product.price : 0
        }

        api.createItem(productObject).then(() => {
            setLoad(false)
            setOpen(false)
            props.getItems().then(() => resetFields())
        }).catch(() => {
            setLoad(false)
            setOpen(false)
            resetFields()
        })
    }

    const editProduct = () => {
        setLoad(true)
        const productObject = {
            ...product,
            price: product.price > 0 ? product.price : 0
        }

        api.editItem(productObject).then(() => {
            setLoad(false)
            setOpen(false)
            props.getItems().then(() => resetFields())
        }).catch(() => {
            setLoad(false)
            setOpen(false)
            resetFields()
        })
    }

    const validFields = () => {
        let fields = ['uid', 'image', 'price']
        return Object.entries(product).reduce((valid, [key, value]) => {
            if (fields.includes(key)) return valid
            if (value === "") {
                valid = false
            } else {
                valid = true
            }
            return valid
        }, false)
    }

    return <Modal
        onClose={() => setOpen(false)}
        onOpen={() => {
            setOpen(true)
        }}
        open={open}
        trigger={!props.edit ?
            <Button content='New Product' primary size="tiny" className={`${props.className}`} /> :
            <Button content='Edit' className={`${props.className}`} inverted color='blue' fluid size="tiny" />
        }
    >
        <Modal.Header>{!props.edit ? "New Product" : "Edit Product"}</Modal.Header>
        <Modal.Content>
            <Form>
                <Form.Field required={true}>
                    <label>Name</label>
                    <input placeholder='Name' onChange={(e) => handleProduct('name', e.target.value)} value={`${product.name}`} />
                </Form.Field>
                <Form.Field required={true}>
                    <label>Description</label>
                    <input placeholder='Description' onChange={(e) => handleProduct('description', e.target.value)} value={`${product.description}`} />
                </Form.Field>
                <Form.Field>
                    <label>Price</label>
                    <input placeholder='Price' type="number" onChange={(e) => handleProduct('price', e.target.value)} value={`${product.price}`} />
                </Form.Field>
            </Form>
        </Modal.Content>
        <Modal.Actions>
            <Button
                disabled={!validFields()}
                loading={load}
                content="Send"
                labelPosition='right'
                icon='checkmark'
                onClick={() => !props.edit ? submitProduct() : editProduct()}
                positive
            />
        </Modal.Actions>
    </Modal>
}

export default ModalCreate