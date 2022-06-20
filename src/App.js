import React from 'react'
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import UserLogin from './routes/UserLogin';
import UserSignup from './routes/UserSignup';
import Account from './routes/Account';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
