import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css" 

export default function Home() {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Train</h2>
          <h3>Gain & Destroy</h3>
          <p>Front-End web developer based in Vilius</p>
          <Link className={btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <img src='/opm.png' alt ='ok' style={{maxWidth: '100%'}}/>
      </section>
    </Layout>
  )
}
