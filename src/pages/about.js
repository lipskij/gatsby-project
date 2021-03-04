import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
// import Rick from "../components/Rick"
import { about, grid } from "../styles/about.module.css"

export default function About() {
  const [data, setData] = useState()
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(x => x.json())
      .then(x => setData(x))
  }, [])

  console.log(data?.results)
  return (
    <Layout>
      <section className={about}>
        <div>
          <h1>Image page</h1>
          <p>Little website about Rick & Morty</p>
          <p>Only for learning purpose</p>
        </div>
        <div>
          <ul className={grid}>
            {data?.results.map(i => {
              const { id, image, name } = i

              return (
                <li key={id}>
                  <img src={image} alt={name} />
                  <h3>{name}</h3>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </Layout>
  )
}
