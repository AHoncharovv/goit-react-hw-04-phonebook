import { useState } from "react";
import s from './ContactForm.module.css'
import PropTypes from 'prop-types';

function ContactForm({ onSubmit }) {
    const [ name, setName ] = useState('');
    const [ number, setNumber ] = useState('');
    
    const handleInputChange = e => {
        switch (e.currentTarget.name) {
            case "name": return setName(e.currentTarget.value);
            case "number": return setNumber(e.currentTarget.value);
            default: return "";
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(name, number);
        formReset();
    }

    const formReset = () => {
        setName("");
        setNumber("");
        return
    }
    
    return (
        <form onSubmit={handleSubmit} className={s.form}>
                    
            <label className={s.label}>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleInputChange}
                    className={s.input}
                />
            </label>

            <label className={s.label}>
                Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleInputChange}
                    className={s.input}
                />
            </label>

            <button className={s.btn}>Add contact</button>
                    
        </form>   
    );   
};

export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};