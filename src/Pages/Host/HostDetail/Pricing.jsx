import React from 'react'
import { useOutletContext } from 'react-router-dom'

function Pricing() {

    const [Van, setVan] = useOutletContext()

  return (
    <p><span>Pricing:</span>${Van.price}/day</p>
  )
}

export default Pricing