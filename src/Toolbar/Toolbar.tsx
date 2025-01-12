import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Store/store';
import { setSearchTerm, setSortBy, setSortDirection } from '../Store/listSlice';
import './Toolbar.css';

const Toolbar = () => {
  const sortBy = useSelector((state: RootState) => state.list.sortBy);
  const sortDirection = useSelector((state: RootState) => state.list.sortDirection);
  const dispatch = useDispatch<AppDispatch>();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  // Handle sort option change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(e.target.value));
  };

  // Handle sort direction toggle
  const handleSortDirectionChange = () => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    dispatch(setSortDirection(newDirection));
  };

  return (
    <>
      <div className="search-sort-container">
        <div className="filter-buttons">
          <div className="sort-by">
            <label>Sort By:</label>
            <select id="sort-by" value={sortBy}
              onChange={handleSortChange} name="sort-by" className="sort-select">
              <option value="episode_id">Sort by Episode</option>
              <option value="release_date">Sort by Year</option>
            </select>
          </div>
          <button className="order-btn" id="order-btn" onClick={handleSortDirectionChange} > Sort {sortDirection === 'asc' ? 'Descending' : 'Ascending'}</button>
        </div>

        <div className="search-box">
          <input type="text" className="w-100 m-2" placeholder='Type to filter...' onChange={handleSearchChange} />
        </div>
      </div>
    </>
  )
}

export default Toolbar