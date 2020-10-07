import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import styled from "styled-components"

const StyledH1 = styled.h1`
  color: rebeccapurple;
`

export default function Home() {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <StyledH1>{title}</StyledH1>
      <p>{description}</p>
    </div>
  )
}
