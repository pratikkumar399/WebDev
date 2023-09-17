import React, { useState } from 'react';
import TextVIsible from './components/TextVIsible';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './utils/Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<TextVIsible />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
