import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Joke from './pages/Joke'
import Character from './pages/Character'
import ErrorPage from './pages/error-page'

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <ErrorPage /> },
  { path: '/joke', element: <Joke /> },
  { path: '/character', element: <Character /> },
])

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
