import { RouterProvider } from 'react-router-dom'
import { routes } from './router'

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} fallbackElement={<p>Loading...</p>} />
    </div>
  )
}

export default App
