import { Input } from "semantic-ui-react"
import Api from "../../entities/api"
import search_bar from "./I_search_bar"
import "./searchBar.css"

const api = new Api()

const SearchBar = (props: search_bar) => {
    return <>
        <Input size='small' icon='search' placeholder='Search...' className="search_bar" onChange={(e) => {
            api.searchItem(e.target.value).then((res) => {
                console.log(res)
                props.setProducts(res)
            })
        }} />
    </>
}

export default SearchBar