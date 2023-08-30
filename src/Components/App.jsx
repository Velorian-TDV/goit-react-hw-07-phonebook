import { Wrapper } from './App.styled';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

export default function App() {
    return (
        <Wrapper>
            <h2>Phonebook</h2>
            <Form />
            <h2>Contacts</h2>
            <Filter />
            <Contacts />
        </Wrapper>
    );
}