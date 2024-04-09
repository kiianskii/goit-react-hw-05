import { Link } from "react-router-dom"
import s from "./MovieList.module.css"

function MovieList({ movies }) {
  return (
    <ol className={s.list}>
				{movies?.map(film => (
					<li key={film.id} className={s.item}>
						<Link to={film.id.toString()}>
							{film.original_title}
						</Link>
					</li>
				))}
			</ol>
  )
}

export default MovieList