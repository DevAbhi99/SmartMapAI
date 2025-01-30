import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Main from './Components/Main';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/main" element={<Main/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
