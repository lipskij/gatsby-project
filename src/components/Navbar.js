import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1 className="nav-text">{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/anime">Anime</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}
