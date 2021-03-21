import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>“I’ll leave tomorrow’s problems to tomorrow’s me.”</h2>
          <p>– Saitama (One-Punch Man)</p>
          <h4>Front-End web developer based in Vilius</h4>
          <Link className={btn} to="/anime">
            Anime List
          </Link>
        </div>
        <StaticImage src="../images/saitama.png" alt="Saitama" />
      </section>
    </Layout>
  )
}
// fluid does not work in gatsby 3.0
export const query = graphql`
  query ImageyQuery {
    file(relativePath: { eq: "saitama.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
