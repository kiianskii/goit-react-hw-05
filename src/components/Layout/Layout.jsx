import { Outlet } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import { Suspense } from "react"


function Layout() {
  return (
        <div>
			<Navigation />
			<section className='outlet'>
				<Suspense fallback={<div>Loading, please wait...</div>}>
					<Outlet />
				</Suspense>
			</section>
		</div>
  )
}

export default Layout