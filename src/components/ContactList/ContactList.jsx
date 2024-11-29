import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filterName = useSelector(selectNameFilter);
    const filteredData = contacts.filter(contact => contact.name.toLowerCase().includes(filterName));
    return (
        <ul className={s.list}>
            {filteredData.map(contact => {
                return (
                    <li key={contact.id}>
                        <Contact data={contact} contactId={contact.id} />
                    </li>
                )
            })}
        </ul>
    )
}

export default ContactList