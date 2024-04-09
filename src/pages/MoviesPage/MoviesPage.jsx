import { useSearchParams } from "react-router-dom"
import SearchBar from "../../components/SearchBar/SearchBar"
import { useEffect, useMemo, useState } from "react"
import { fetchMoviesByName } from "../../services/api"
import MovieList from "../../components/MovieList/MovieList"


function MoviesPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchedFilms, setSearchedFilms] = useState([])

	const query = searchParams.get('query') || ''
	console.log(query)
    const args = useMemo(() => ({ q: query }), [query])
    


    useEffect(() => {
        async function getSearchedMovies() {
            console.log(args.q);

        const {results} = await fetchMoviesByName(args.q)
            setSearchedFilms(results)
        }
     getSearchedMovies()
        }, [args.q])

    
  return (
      <div>
          <SearchBar setSearchParams={setSearchParams} />
          <MovieList movies={searchedFilms} />
    </div>
  )
}

export default MoviesPage