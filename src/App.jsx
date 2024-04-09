
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'

function App() {
  return (
    <Routes>
			<Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
				<Route path='movies/:movieId' element={<MovieDetailsPage />} />
        
        
			</Route>
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
  )
}

export default App
