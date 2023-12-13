
import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [ninjas, setNinjas] = useState([]);

  useEffect(() => {
    axios.get('/api/ninjas')
      .then(res => {
        console.log(res);
        setNinjas(res.data);
      })
      .catch(err => console.log(err))
  }
    , []);

  return (
    <>
      <h1>React App</h1>
      <p>Number of ninja: {ninjas.length}</p>

      {
        ninjas.map((ninja) => (
          <div key={ninja.id}>
            <p>{ninja.name}: {ninja.rank}</p>

          </div>
        ))
      }
    </>
  )
}

export default App
