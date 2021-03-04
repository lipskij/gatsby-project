import React from "react"
import Layout from "../components/Layout"
import {about} from '../styles/about.module.css'

export default function About() {
  return (
    <Layout>
      <section className={about}>
        <div>
          <h1>About page</h1>
          <p>I hate lorem ipsum so i'm not going to use it this time.</p>
          <p>I hate lorem ipsum so i'm not going to use it this time.</p>
          <p>I hate lorem ipsum so i'm not going to use it this time.</p>
        </div>
        <img
          src="/opmabout.png"
          alt="opm and genos"
          style={{ maxWidth: "100%" }}
        />
      </section>
    </Layout>
  )
}
