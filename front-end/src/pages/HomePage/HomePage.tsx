import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <main>
      <Link to={`/signup`}> Create Account </Link>
      <Link to={`/login`}> Login </Link>
    </main>
  )
}

export default HomePage