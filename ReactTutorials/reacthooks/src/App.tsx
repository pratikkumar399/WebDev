import './App.css'
import Home from './hooks/Home'
import UseEffect from './hooks/UseEffect'
import UseState from './hooks/UseState'
// import {}  
import { Route, Routes } from 'react-router-dom'




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/useeffect" element={<UseEffect />} />
      </Routes>

    </>
  )
}

export default App
