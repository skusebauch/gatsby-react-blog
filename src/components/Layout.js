import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Header from "./Header"
import styled from "styled-components"

const AppStyle = styled.main`
  width: 800px;
  margin: 0 auto;
`

function Layout({ children }) {
  const { title, description } = useSiteMetadata()
  return (
    <AppStyle>
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </AppStyle>
  )
}

export default Layout
