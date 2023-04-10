import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/Home'
import MoviesPage from '@/pages/Movies'
import CharactersPage from '@/pages/Characters'
import QuotesPage from '@/pages/Quotes'

export const routes = createBrowserRouter([
  {
    index: true,
    Component: HomePage
  },
  {
    path: '/movies',
    Component: MoviesPage
  },
  {
    path: '/characters',
    Component: CharactersPage
  },
  {
    path: '/quotes',
    Component: QuotesPage
  },
])
