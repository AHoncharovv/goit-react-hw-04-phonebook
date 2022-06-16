import s from "./Filter.module.css";
import PropTypes from 'prop-types';

function Filter({ value, filterChange }) {
    return (
        <label className={s.label}>
            Find contacts by name
            <input value={value} onChange={filterChange} className={s.input}></input>
        </label>
    )
}

export default Filter;
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    filterChange: PropTypes.func.isRequired,
}
