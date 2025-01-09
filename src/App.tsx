import { useEffect, useState } from 'react';
import './App.css';
import axiosInstance from './axiosInstance';

function App() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await axiosInstance.get(''); // Replace with your endpoint
      console.log('response', response);
      // setData(response);
    } catch (err) {
      // setError(err.message);
    }
  };

  return (
    <>
      <div>Hello</div>
    </>
  );
}

export default App;
