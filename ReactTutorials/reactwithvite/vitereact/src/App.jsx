import React, { useState } from 'react';
import TextVisible from './projects/TextVisible/TextVIsible';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './utils/Navbar';
import Passowrd from './projects/passwordgenerator/Passowrd';
import Currency from './projects/currencyProject/Currency';


const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />

    </div>
  );

}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<TextVisible />} />
            <Route path="/show" element={<TextVisible />} />
            <Route path="/password" element={<Passowrd />} />
            <Route path="/currency" element={<Currency />} />
          </Route>
        </Routes>
      </Router>
    </>


  );
}

export default App;
