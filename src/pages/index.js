import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"

export default function Home({ data }) {
  console.log(data)

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Wubba Lubba Dub Dub</h2>
          <h3>Rick & Morty</h3>
          <p>Front-End web developer based in Vilius</p>
          <Link className={btn} to="/about">
            Rick & Morty Images
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
