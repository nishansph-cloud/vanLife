import React from 'react'
import { useOutletContext } from 'react-router-dom'

function Photos() {

    const [van, setVan] = useOutletContext()

  return (
    <img height={200} alt='van-image' src={van.imageUrl}/>
  )
}

export default Photos