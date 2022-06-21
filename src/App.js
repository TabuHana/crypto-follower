import React, { useEffect, useState } from 'react'
import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes } from 'react-router-dom';
import axios from "axios";

import Navbar from './components/Navbar'
import Home from './routes/Home';
import UserLogin from './routes/UserLogin';
import UserSignup from './routes/UserSignup';
import Account from './routes/Account';
import CoinPage from './routes/CoinPage';
import Footer from './components/Footer';

function App() {
  const [coins, setCoins] = useState([])

  // has to be a string. no hidden key so leaving here x.x
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=true'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
    })
  },[url])

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home coins={coins}/>} />
        <Route path='/userlogin' element={<UserLogin />} />
        <Route path='/usersignup' element={<UserSignup />} />
        <Route path='/account' element={<Account />} />
        <Route path='/coin/:coinId' element={<CoinPage />}>
          <Route path=':coinId' />
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
