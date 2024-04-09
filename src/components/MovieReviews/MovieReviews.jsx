import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchMovieReviews } from "../../services/api"


function MovieReviews() {

    const {movieId} = useParams()
    const [films, setFilms] = useState([])
    useEffect(() => {
        async function getSearchedMovies() {
        const reviews = await fetchMovieReviews(movieId)
            setFilms(reviews.results)
        }

     getSearchedMovies()
        }, [movieId]
    )
    console.log(films);

    if (films.length === 0) {
        return (<h2 className="reviews">We don`t have any reviews for this film</h2>)
    }

  return (
      <div>
          <ul>{films.map(film => {
              return (<li key={film.id}>
                  <h3>{film.author}</h3>
                  <p>{film.content}</p>
              </li>)
          })}</ul>
    </div>
  )
}

export default MovieReviews