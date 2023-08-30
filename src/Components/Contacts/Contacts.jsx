import { useDispatch, useSelector } from "react-redux";
import { deleteContact, contactList } from '../../Redux/contactsSlice'
import { contactFilter } from '../../Redux/filterSlice'

export default function Contacts() {

    const contactsFromStore = useSelector(contactList);
    const filterStatus = useSelector(contactFilter);

    const dispatch = useDispatch();
    const contactDelete = (id) => dispatch(deleteContact(id))

    const getAllContacts = () => {
        const filteredContacts = contactsFromStore.filter(item => item.name.toLowerCase().includes(filterStatus));
        const displayContacts = filterStatus === '' ? contactsFromStore : filteredContacts;

        return displayContacts
    }

    return (
        <section className='contacts'>
            {getAllContacts().length === 0 ? <p className="empty">Contact's not found</p> :
                <ul>
                    {getAllContacts().map(({ id, name, number }) => (
                        <li key={id}>
                            <p>{name}: {number}</p>
                            <button
                                type='button'
                                name={id}
                                onClick={() => contactDelete(id)}
                            >Delete</button>
                        </li>
                    ))}
                </ul>
            }
        </section>
    )
}