import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {

  return (
    <section className='not-found-section'>
        <div>
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link to="/">Return to home</Link>
        </div>
    </section>
  )
}

export default NotFound