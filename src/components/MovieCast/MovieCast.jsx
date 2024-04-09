import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchMovieCast } from "../../services/api"
import s from "./MovieCast.module.css"


function MovieCast() {
const {movieId} = useParams()
    const [castList, setCastList] = useState([])
    useEffect(() => {
        async function getSearchedMovies() {
        const data = await fetchMovieCast(movieId)
            setCastList(data.cast)
        }

     getSearchedMovies()
        }, [movieId]
    )

  return (
      <div>
           <ul className={s.list}>{castList.map(member => {
             return (<li className={s.card} key={member.id}>
                   <img className={s.img} src={`https://image.tmdb.org/t/p/w500${member.profile_path}`} alt="" />
                  <h3>{member.name}</h3>
                  <p>{member.character}</p>
              </li>)
          })}</ul> 
    </div>
  )
}

export default MovieCast