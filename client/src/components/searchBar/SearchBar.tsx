import { Input } from "semantic-ui-react"
import Api from "../../entities/api"
import search_bar from "./I_search_bar"

const api = new Api()

const SearchBar = (props: search_bar) => {
    return <>
        <Input size='small' icon='search' placeholder='Search...' style={{ width: '80%' }} onChange={(e) => {
            api.searchItem(e.target.value).then((res) => {
                console.log(res)
                props.setProducts(res)
            })
        }} />
    </>
}

export default SearchBar