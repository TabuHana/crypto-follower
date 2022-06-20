import React from 'react'
import CoinTool from './CoinTool';

const CoinSearch = ({ coins }) => {


  return (
    <div>
      <div>
        <h1>Search Crypto</h1>
        <form>
          <input type='text' placeholder='Search coin' />
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th>24h Volume</th>
            <th>Market</th>
            <th>Last 7 days</th>
          </tr>
        </thead>

        <tbody>
          {coins.map((coin) => (
            <CoinTool key={coin.id} coin={coin} />
          ))}
        </tbody>

      </table>

    </div>
  )
}

export default CoinSearch