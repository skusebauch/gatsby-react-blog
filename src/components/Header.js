import React from "react"
import { Link } from "gatsby"

function Header({ siteTitle, siteDescription }) {
  return (
    <Link to="/">
      <h1>{siteTitle}</h1>
      <p>{siteDescription}</p>
    </Link>
  )
}

export default Header
