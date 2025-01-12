import { useEffect, useState } from 'react';
import './App.css';
import Searchbar from './Searchbar/Searchbar';

function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState({});

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
      console.log(result)
      setData(result);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className='d-flex'>
        <div className='d-flex'>
          <button className='m-2'>Sort By</button>
          <Searchbar/>
        </div>
      </div>
    </>
  );
}

export default App;
