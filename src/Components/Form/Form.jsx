import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact, contactList } from '../../Redux/contactsSlice';
import FormSection from "../FromSection/FormSection";

export default function Form() {
    const contactsFromStore = useSelector(contactList)
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();

        const { name, number } = event.target;
        const exist = contactsFromStore.find(contact => contact.name === name.value);

        if (exist) alert('contact exist')
        else {
            const newContact = {
                id: nanoid(),
                name: name.value,
                number: number.value
            };

            dispatch(addContact(newContact))
        }
    }

    return (
        <form className='form' onSubmit={handleSubmit} >
            <FormSection
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <FormSection
                type="text"
                name="number"
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <button type="submit">Add Contact</button>
        </form>
    )
}