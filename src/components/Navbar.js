import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  console.log(window.innerWidth)
  return (
    <nav>
      <h1 className='nav-text'>...To Live Is To Risk It All...</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}
