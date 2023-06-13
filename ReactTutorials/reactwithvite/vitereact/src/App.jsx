import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {


  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );

  return (
    <div>
      <h1>{greeting}</h1>

      <input
        type="text"
        value={greeting}
        onChange={event => setGreeting(event.target.value)}
      />
    </div>
  )

}

export default App
