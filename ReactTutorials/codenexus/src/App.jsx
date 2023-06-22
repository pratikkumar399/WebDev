import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import styles from "./styles";
const Layout = () => {
  return (
    <div>

      <Navbar />



      <div className="flex-grow">
        <Outlet />
      </div>

      <div className={`bg-primary  ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/practice" element={<Practice />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
