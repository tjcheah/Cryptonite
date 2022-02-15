import React from 'react'
import { createContext, useState, useContext, useEffect } from 'react'

const Crypto = createContext()

const CryptoContext = ({ children }) => {
  const [currency, setcurrency] = useState('USD')
  const [symbol, setsymbol] = useState('$')

  useEffect(() => {
    if (currency === 'USD') setsymbol('$')
    else if (currency === 'MYR') setsymbol('RM')
  }, [currency])

  return (
    <Crypto.Provider value={{ currency, symbol, setcurrency }}>
      {children}
    </Crypto.Provider>
  )
}

export default CryptoContext

export const CryptoState = () => {
  return useContext(Crypto)
}
