import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Joke from './pages/Joke'
import Character from './pages/Character'
import ErrorPage from './pages/error-page'
import Layout from './pages/Layout'

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'joke', element: <Joke /> },
      { path: 'character', element: <Character /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
