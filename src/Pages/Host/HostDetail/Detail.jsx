import React from 'react'
import { use } from 'react'
import { useOutletContext } from 'react-router-dom'

function Detail() {

    const [van, setVan] = useOutletContext()

  return (
    <>
        <h1 className='detail-name'><span>Name:</span>{van.name}</h1>

        <h1><span>category:</span>{van.type}</h1>

        <p><span>Description:</span>{van.description}</p>

        <h1><span>Visibility:</span>Public</h1>
    </>
  )
}

export default Detail