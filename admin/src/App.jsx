import React from 'react'
import { BrowserRouter as Router, Routes, Route }  from "react-router-dom";
import Home from "./components/Home";
import SportsAdmin from "./components/SportsAdmin";
import NSSAdmin from "./components/NSSAdmin";
import NCCAdmin from "./components/NCCAdmin";
import LakshAdmin from "./components/LakshAdmin";
import SportsDay from './pages/SportsDay';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<SportsAdmin />} />
          <Route path="/nss" element={<NSSAdmin />} />
          <Route path="/ncc" element={<NCCAdmin />} />
          <Route path="/laksh" element={<LakshAdmin />} />
          <Route path='/sports/sports-day' element={<SportsDay/>}/>
        </Routes>
    </>
  );
}

export default App;
