import clsx from "clsx"
import { NavLink } from "react-router-dom"
import s from "./Navigation.module.css"


function Navigation() {

        const activeStyleLink = ({ isActive }) => {
            return clsx('link', isActive && 'active')
        }
    
  return (
    <header className='navbar'>

			<ul className={s.list}>
				<li className={s.item}>
					<NavLink className={activeStyleLink} to='/'>
						Home
					</NavLink>
				</li>
				<li className={s.item}>
					<NavLink className={activeStyleLink} to='/movies'>
						Movies
					</NavLink>
				</li>
			
			</ul>
		</header>
  )
}

export default Navigation