import React, { useEffect, useState } from 'react'
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import UserLogin from './routes/UserLogin';
import UserSignup from './routes/UserSignup';
import Account from './routes/Account';
import axios from "axios";

function App() {
  const [coin, setCoin] = useState([])

  // has to be a string. no hidden key so leaving here x.x
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=true'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data)
      console.log(response.data)
    })
  },[url])

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
