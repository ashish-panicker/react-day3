import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Joke from './pages/Joke'
import Character from './pages/Character'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
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
