import { useDispatch } from "react-redux";
import { setFilter } from '../../Redux/filterSlice'

export default function Filter() {

    const dispatch = useDispatch();

    const searchContact = event => dispatch(setFilter(event.target.value.toLowerCase()))

    return (
        <section className="search">
            <label htmlFor='search'>Find contact by name</label>
            <input type="text" id='search' onChange={searchContact} placeholder="Search" />
        </section>
    )
}