import React from "react";
import CryptoPage from "../components/Crypto/CryptoPageTable";
import News from "../components/News/News";
import CryptoExchange from "../components/Crypto/CryptoExchanges";

const Crypto = () => {
  return (
    <div>
      <News />
      <CryptoExchange />
      <CryptoPage />
    </div>
  );
};

export default Crypto;
