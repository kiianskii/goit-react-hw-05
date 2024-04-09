import { useEffect,  useState } from "react"
import { useParams } from "react-router-dom"
import { fetchMovieDetails } from "../../services/api"


function MovieDetailsPage() {
    const {movieId} = useParams()
    const [movie, setMovie] = useState([])
    useEffect(() => {
        async function getSearchedMovies() {
        const results = await fetchMovieDetails(movieId)
            setMovie(results)
        }
     getSearchedMovies()
        }, [movieId]
    )
    console.log(movie);
        if (!movie) {
		return <h2>Loading...</h2>
	}
	// const location = useLocation()
	// const goBackRef = useRef(location.state?.from)
	return (
		<div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
			
			<div>
                <h2>{movie?.title} ({movie.release_date})</h2>
                <p>User score: {movie.vote_average}</p>
                <h3>Overview:</h3>
                <p>{movie?.overview}</p>
                <h3>Genres:</h3>
                <ul>{movie.genres.map(genre => {
                    return (<li key={genre.id}>{genre.name}</li>)
                })}</ul> 
			</div> 
		</div>
	)
}

export default MovieDetailsPage