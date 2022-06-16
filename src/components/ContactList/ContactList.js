import s from './ContactList.module.css';
import PropTypes from 'prop-types';

function ContactList({ users, onClick }) {
    return (
        <ul className={s.list}>
            {users.map((user) => (
                <li key={user.id} className={s.item}>
                    <span className={s.text}>{user.name} : {user.number}</span>
                    <button type="button" value={user.id} onClick={onClick} className={s.btn}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default ContactList;

ContactList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
    onClick: PropTypes.func.isRequired
}