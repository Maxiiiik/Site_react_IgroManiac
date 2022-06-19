
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Page_all from './components/pages/Page_all';
import Page_1 from './components/pages/Page_1';
import Page_2 from './components/pages/Page_2';
import Page_3 from './components/pages/Page_3';
import Page_4 from './components/pages/Page_4';
import Page_5 from './components/pages/Page_5';
import Page_6 from './components/pages/Page_6';
import Page_7 from './components/pages/Page_7';
import Page_8 from './components/pages/Page_8';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/page_all" element={<Page_all />} />
        <Route path="/page_1" element={<Page_1 />} />
        <Route path="/page_2" element={<Page_2 />} />
        <Route path="/page_3" element={<Page_3 />} />
        <Route path="/page_4" element={<Page_4 />} />
        <Route path="/page_5" element={<Page_5 />} />
        <Route path="/page_6" element={<Page_6 />} />
        <Route path="/page_7" element={<Page_7 />} />
        <Route path="/page_8" element={<Page_8 />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
