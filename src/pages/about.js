// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
// Step 2: Define your component
const AboutPage = () => {
  return (
     <Layout pageTitle="About Me">
      <p>Страница о нас</p>
      <StaticImage
      alt='Bycet'
      src='../images/vid-sboku-na-buket.jpg'
      />
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage

