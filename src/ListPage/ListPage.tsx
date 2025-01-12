import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../Store/store';
import { selectItem } from '../Store/listSlice';
import './ListPage.css';

const ListPage = () => {

  const items = useSelector((state: RootState) => state.list.items);
  const dispatch = useDispatch<AppDispatch>();
  const sortBy = useSelector((state: RootState) => state.list.sortBy);
  const sortDirection = useSelector((state: RootState) => state.list.sortDirection);
  const searchTerm = useSelector((state: RootState) => state.list.searchTerm);
  const selectedItemId = useSelector((state: RootState) => state.list.selectedItemId);

  // Filtering the list based on the search term
  const filteredList = items.filter((item: any) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.release_date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort the filtered list based on the 'sortBy' state
  const sortedList = [...filteredList].sort((a, b) => {
    if (sortBy === 'episode_id') {
      return sortDirection === 'asc' ? a.episode_id - b.episode_id : b.episode_id - a.episode_id; // Asc/Desc order
    } else if (sortBy === 'release_date') {
      return sortDirection === 'asc' ? new Date(a.release_date).getTime() - new Date(b.release_date).getTime() : new Date(b.release_date).getTime() - new Date(a.release_date).getTime(); // Asc/Desc order
    }
    return 0;
  });

  const handleSelectItem = (value: any) => {
    dispatch(selectItem(value));
  };

  return (
    <>
      <table className='highlight-table'>
        <tbody>
          {sortedList.map((item: any) => (
            <tr className={selectedItemId?.episode_id === item?.episode_id ? 'selected' : ''}
              key={item.episode_id} onClick={() => handleSelectItem(item.episode_id)}>
              <td> {item.episode_id} </td>
              <td>{item.title} </td>
              <td>{item.release_date} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ListPage