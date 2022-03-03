import React from 'react'
import CryptoPage from '../components/Crypto/CryptoPageTable'
import NewsSlider from '../components/News/NewsSlider'
import CryptoExchange from '../components/Crypto/CryptoExchanges'

const Crypto = () => {
  return (
    <div>
      <div>
        <div className="newsContainer">
          <NewsSlider />
        </div>
      </div>
      <CryptoExchange />
      <CryptoPage />
    </div>
  )
}

export default Crypto
