import { Link, useLocation } from "react-router-dom"
import s from "./MovieList.module.css"

function MovieList({ movies }) {
	const location = useLocation()
  return (
    <ol className={s.list}>
				{movies?.map(film => (
					<li key={film.id} className={s.item}>
						<Link to={`/movies/${film.id.toString()}`} state={{ from: location }}>
							{film.original_title}
						</Link>
					</li>
				))}
			</ol>
  )
}

export default MovieList