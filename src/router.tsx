import { createBrowserRouter } from "react-router-dom";
import HomePage from '@/pages/Home'
import MoviesPage from '@/pages/Movies'

export const routes = createBrowserRouter([
  {
    index: true,
    Component: HomePage
  },
  {
    path: '/movies',
    Component: MoviesPage
  },
])
