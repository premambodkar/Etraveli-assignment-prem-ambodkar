import '../App.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../Store/store';
import { setSearchTerm } from '../Store/listSlice';

const Searchbar = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="d-flex">
      <input className="w-100 m-2" placeholder='Type to filter...' type="text" onChange={handleSearchChange} />
    </div>
  )
}

export default Searchbar