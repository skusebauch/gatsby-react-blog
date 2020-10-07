import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import styled from "styled-components"
import Layout from "../components/Layout"

export default function Home() {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Layout />
    </div>
  )
}
