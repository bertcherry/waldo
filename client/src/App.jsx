import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [apiResponse, setApiResponse] = useState('');

  useEffect(() => {
    let mounted = true;

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000');
    const data = await response.json();
    setApiResponse(data);
  }

  if (mounted) {
    fetchData();
  }
  return () => mounted = false;
  }, []);
  

  return (
    <>
      <p>
        {apiResponse.title}
      </p>
    </>
  )
}

export default App
