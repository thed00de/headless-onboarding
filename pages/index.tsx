import styles from '../components/main.module.css'

import { InferGetStaticPropsType } from 'next'

type Movie = {
  title: string
  release_year: number
  rating: number
  description: string
}

export const getStaticProps = async () => {
  const res = await fetch('https://disneydidfine.wpengine.com/wp-json/wp/v2/movies?_embed')
  const movies: Movie[] = await res.json()
  console.log(movies)

  return {
    props: {
      movies,
    },
  }
}

function Home({ movies }: InferGetStaticPropsType<typeof getStaticProps>) {
  return(
    <div className={styles.bg}>
      <div className={styles.body}>
      <h2>Welcome to Star Wars-ville!</h2>
      <h4>Everything you could ever want, and more things that you would never want.</h4>
      <div className={styles.movie_poster}>
      {movies.map((movie, index) =>
        <div key={index}>
        {movie.title.rendered} - {movie.acf.release_year}<br/>
        <sub>Rating: {movie.acf.rating} / 5 ⭐</sub> <br/>
        <img
          src={
            movie._embedded['wp:featuredmedia'][0].media_details.sizes
              .medium.source_url
            }
          alt={movie.title.rendered}
        /> <br/>
        <div dangerouslySetInnerHTML={{ __html: movie.acf.description }}></div>
        <hr />
        </div>)}
      </div>
      </div>
    </div>
  )
}

export default Home;
