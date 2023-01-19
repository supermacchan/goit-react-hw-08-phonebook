import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from "redux/selectors";
import css from './Filter.module.css';

export const Filter = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const changeFilter = event => {
        dispatch(filterContacts(event.currentTarget.value));
    };

    return (
        <label>
            <input
                    type="text"
                    value={filter}
                    onChange={changeFilter}
                    className={css.filterInput}
                    placeholder='Filter by name'
            />
        </label>
    );
};