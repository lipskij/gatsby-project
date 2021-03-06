import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn, mainImg } from "../styles/home.module.css"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Wubba Lubba Dub Dub</h2>
          <img src="/rnm.png" alt="rick and morty" style={{ width: "50%" }} />
          <p>Front-End web developer based in Vilius</p>
          <Link className={btn} to="/about">
            Rick & Morty Images
          </Link>
        </div>
        <img src="/rnm2.png" alt="rick" style={{ width: "80%" }} />
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
