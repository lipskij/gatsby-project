import React from "react"
import favicon from "../../static/favicon.ico"
import Helmet from "react-helmet"
import Navbar from "./Navbar"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2021 Fan Made</p>
      </footer>
    </div>
  )
}
