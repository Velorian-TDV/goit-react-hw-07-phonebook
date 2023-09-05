import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { nanoid } from "@reduxjs/toolkit";
import { contactList, contactsLoading, contactsError } from '../../Redux/contactsSlice';
import { contactFilter } from '../../Redux/filterSlice';
import { fetchContacts, deleteContact } from '../../Redux/operations';

export default function Contacts() {
    const dispatch = useDispatch();

    const contactsFromStore = useSelector(contactList);
    const filterStatus = useSelector(contactFilter);
    const contactsIsLoading = useSelector(contactsLoading);
    const contactsGetError = useSelector(contactsError);

    const contactDelete = (id) => dispatch(deleteContact(id))
    const getAllContacts = () => {
        const filteredContacts = contactsFromStore.filter(item => item.name.toLowerCase().includes(filterStatus));
        const displayContacts = filterStatus === '' ? contactsFromStore : filteredContacts;
        return displayContacts
    }
    
    useEffect(() => { dispatch(fetchContacts()) }, [dispatch])

    return (
        <section className='contacts'>
            {getAllContacts().length === 0 ?
                contactsIsLoading && !contactsGetError && <p className="empty">Loading ...</p> ||
                <p className="empty">Contacts not found</p> :
                <ul>
                    {getAllContacts().map(({ id, name, phone }) => (
                        <li key={nanoid()}>
                            <p>{name}: {phone}</p>
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