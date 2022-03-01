import React from "react";

import BtcUsd from "../components/Forex/btc-usd.js";
import EurUsd from "../components/Forex/eur-usd.js";
import UsdJpy from "../components/Forex/usd-jpy.js";

export default function Forex() {
  return (
    <div className="Forex">
      <BtcUsd />
      <UsdJpy />
      <EurUsd />
    </div>
  );
}
