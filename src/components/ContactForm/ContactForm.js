import React, { Component } from "react";
import s from './ContactForm.module.css'
import PropTypes from 'prop-types';

class ContactForm extends Component {
    
    state = {
    name: '',
    number: '',
    }

    HandleInputChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({[name]: value})
    }

    HandleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.formReset();
    }

    formReset = () => {
        this.setState({name: '', number: ''})
    }
    
    render() {

        return (
            
            <form onSubmit={this.HandleSubmit} className={s.form}>
                    
                <label className={s.label}>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.HandleInputChange}
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
                        value={this.state.number}
                        onChange={this.HandleInputChange}
                        className={s.input}
                    />
                </label>

                <button className={s.btn}>Add contact</button>
                    
            </form>
        
        );
    };
};

export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};