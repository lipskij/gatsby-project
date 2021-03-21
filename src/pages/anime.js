import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import { about, grid } from "../styles/anime.module.css"

export default function About() {
  const [favoriteAnime, setFavoriteAnime] = useState([])

  const GetAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/genre/anime/24/1?order_by=title`
    ).then(res => res.json())

    setFavoriteAnime(temp.anime.splice(0, 21))
  }

  useEffect(() => {
    GetAnime()

    console.log("SiFi anime")
  }, [])

  return (
    <Layout>
      <section className={about}>
        <div>
          <h1>Favorite Sci-Fi Anime Page</h1>
          <p>Little website about my favorite anime</p>
          <p>Only for learning purpose</p>
        </div>
        <div className={grid}>
          {favoriteAnime.map(anime => (
            <div key={anime.mal_id}>
              <h3>{anime.title}</h3>
              <img src={anime.image_url} alt='Anime images'/>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
