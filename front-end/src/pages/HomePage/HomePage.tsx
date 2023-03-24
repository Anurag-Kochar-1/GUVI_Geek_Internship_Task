import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <Link to={`/signup`}> Create Account </Link>
    </div>
  )
}

export default HomePage