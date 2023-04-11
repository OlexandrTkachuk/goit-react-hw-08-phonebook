// system
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/filter-slice';
import { selectFilter } from 'redux/contacts/contacts-selectors';

// styles
import { FilterWrapper, FilterInput, Button } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    const { value } = event.currentTarget;
    dispatch(changeFilter(value));
  };

  const clearFilter = () => {
    dispatch(changeFilter(''));
  };

  return (
    <>
      <FilterWrapper>
        <label htmlFor="filter">
          <FilterInput
            type="text"
            id="filter"
            name="filter"
            value={filter}
            onChange={handleFilterChange}
          />
        </label>

        <Button type="button" onClick={clearFilter}>
          Clear
        </Button>
      </FilterWrapper>
    </>
  );
};

export default Filter;
