import './App.css'
import Home from './hooks/Home'
import UseCallBack from './hooks/UseCallBack'
import UseEffect from './hooks/UseEffect'
import UseEffectTwo from './hooks/UseEffectTwo'
import UseRef from './hooks/UseRef'
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
        <Route path="/usecallback" element={<UseCallBack />} />
        <Route path="/useref" element={<UseRef />} />
      </Routes>

    </>
  )
}

export default App
