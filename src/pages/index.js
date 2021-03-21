import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>
            “I’ll leave tomorrow’s problems to tomorrow’s me.”
          </h2>
            <p>– Saitama (One-Punch Man)</p>
          <p>Front-End web developer based in Vilius</p>
          <Link className={btn} to="/anime">
            Anime List
          </Link>
        </div>
        <img src="/saitama.png" alt="saitama" style={{ width: "80%" }} />
      </section>
    </Layout>
  )
}
