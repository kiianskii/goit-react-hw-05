import './App.css'
import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'


const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'))
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'))
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'))
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'))
// const NotFoundPage = lazy(() => import('./pages/HomePage/HomePage'))

function App() {
  return (
    <Routes>
			<Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<MovieCast />} />
					<Route path='reviews' element={<MovieReviews />} />
        </Route>
			</Route>
			<Route path='*' element={<NotFoundPage/>} />
		</Routes>
  )
}

export default App
