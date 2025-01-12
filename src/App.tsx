import { useEffect, useState } from 'react';
import './App.css';
import Searchbar from './Searchbar/Searchbar';
import { useDispatch } from 'react-redux';
import { setList, clearList } from './Store/listSlice';
import ListPage from './ListPage/ListPage';
import ContentPreview from './ContentPreview/ContentPreview';

function App() {
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await fetch('https://swapi.py4e.com/api/films/?format=json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log("Data", result.results)
      dispatch(setList(result.results))
    } catch (err: any) {
      // dispatch(clearList())
      setError(err.message);
    }
  };

  return (
    <>
      <div className="container">
        <div className="search-sort">
          <button className="sort-button">Sort By</button>
          <div className="search-box">
            <Searchbar />
          </div>

        </div>
        <div className="main-content">
          <div className="table-container">
          <ListPage />
          </div>
          <div className="content-preview">
          <ContentPreview />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
