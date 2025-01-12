import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../Store/store';
import {  selectItem } from '../Store/listSlice';

const ListPage = () => {

  const items = useSelector((state: RootState) => state.list.items);
  const dispatch = useDispatch<AppDispatch>();

  const handleSelectItem = (value: any) => {
    dispatch(selectItem(value));
  };

  return (
    <>
      <table>
        <tbody>
          {items.map((item: any) => (
            <tr key={item.episode_id} onClick={() => handleSelectItem(item.episode_id)}>
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