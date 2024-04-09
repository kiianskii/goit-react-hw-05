import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../services/api"
import s from "./HomePage.module.css"

import MovieList from "../../components/MovieList/MovieList";


function HomePage() {
    const [popularFilms, setPopularFilms] = useState([])

    useEffect(() => {
        async function getMovies() {
        const {results} = await fetchPopularMovies()
            setPopularFilms(results)
        }
     getMovies()
        }, [])
    


  return (
    <div className={s.users}>
			<h1 className={s.title}>Popular films</h1>
			<MovieList movies={popularFilms} />
		</div>
  )
}

export default HomePage