import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Homepage from './HomePage';
import Checklist from './Components/Check/Checklist';
import Login from './Components/Login/Login';
import PrintData from './Components/PrintData/PrintData';
import MultiPage from './Components/MultiPage/MultiPage';
import ContextAPI from './Components/ContextAPI/ContextAPI';
import Home from './Components/Home';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Homepage />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/checklist" element={<Checklist/>} />
        <Route path = "/login" element={<Login/>} />
        <Route path = "/printdata" element={<PrintData />} />
        <Route path = "/multipage" element={<MultiPage />} />
        <Route path = "/contextapi" element={<ContextAPI />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
