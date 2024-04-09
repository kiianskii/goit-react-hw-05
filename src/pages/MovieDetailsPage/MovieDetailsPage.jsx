import { Suspense, useEffect,  useRef,  useState } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import { fetchMovieDetails } from "../../services/api"
import s from "./MovieDetailsPage.module.css"


function MovieDetailsPage() {
    const {movieId} = useParams()
    const [movie, setMovie] = useState([])
    const location = useLocation()
    const goBackRef = useRef(location.state?.from)
    
    useEffect(() => {
        async function getSearchedMovies() {
        const results = await fetchMovieDetails(movieId)
            setMovie(results)
        }
     getSearchedMovies()
        }, [movieId]
    )

        if (!movie) {
		return <h2>Loading...</h2>
        }

	return (
        <section>
            <Link className={s.link} to={goBackRef.current}>Go back</Link>
            <div className={s.container}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
			
			<div>
                <h2>{movie?.title} ({movie.release_date})</h2>
                <p>User score: {movie.vote_average}</p>
                <h3>Overview:</h3>
                <p>{movie?.overview}</p>
                <h3>Genres:</h3>
                    <ul className={s.genres}>{movie.genres ? movie?.genres.map(genre => {
                    return (<li key={genre.id}>{genre.name}</li>)
                }) : ""}</ul> 
                    </div>
				</div>
                    <h3 className={s.info}>Addictional information:</h3>
				<div className={s.infolist}>
                <Link to='cast'>Cast</Link>
				<Link to='reviews'>Reviews</Link>
                </div> 
               <div>
					<Suspense fallback={<h2>Loading, please wait...</h2>}>
						<Outlet />
                    </Suspense>
                    </div> 
		</section>)
}

export default MovieDetailsPage