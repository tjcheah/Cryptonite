import React from 'react'

import EurUsd from '../components/Forex/eur-usd.js'
import NzdUsd from '../components/Forex/nzd-usd.js'
import UsdJpy from '../components/Forex/usd-jpy.js'

export default function Forex() {
  return (
    <div className="Forex">
      <NzdUsd />
      <UsdJpy />
      <EurUsd />
    </div>
  )
}
