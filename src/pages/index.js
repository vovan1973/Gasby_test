import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
      <p>Главная страница </p>
      <StaticImage
      alt="Собака"
       src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
