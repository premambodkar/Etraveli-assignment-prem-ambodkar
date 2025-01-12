import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { setList } from './Store/listSlice';
import ListPage from './ListPage/ListPage';
import ContentPreview from './ContentPreview/ContentPreview';
import Toolbar from './Toolbar/Toolbar';

function App() {
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
    }
  };

  return (
    <>
      <div className="container">
      <Toolbar />
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
