import './App.css'
import Home from './hooks/Home'
import UseEffect from './hooks/UseEffect'
import UseEffectTwo from './hooks/UseEffectTwo'
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
        <Route path="/useeffecttwo" element={<UseEffectTwo />} />
      </Routes>

    </>
  )
}

export default App
