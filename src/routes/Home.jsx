import React from 'react'
import CoinSearch from '../components/CoinSearch'

const Home = ( {coin} ) => {
  return (
  <CoinSearch coins={coin}/>
    )
}

export default Home