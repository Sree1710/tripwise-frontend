import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Resource404 from './Components/Resource404';
import UserSignIn from './Components/UserSignIn';
import UserSignUp from './Components/UserSignUp';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resource404" element={<Resource404 />} />
          <Route path="/userlogin" element={<UserSignIn />} />
          <Route path="/usersignup" element={<UserSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
