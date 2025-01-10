import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const id = useId();
  const value = useSelector(selectNameFilter);

  function handleOnChange(event) {
    dispatch(changeFilter(event.target.value));
  }

  return (
    <div className={css.search}>
      <label htmlFor={id}>Find contacts by name</label>
      <input id={id} value={value} onChange={handleOnChange}></input>
    </div>
  );
}
