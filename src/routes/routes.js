import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Joke from "../pages/Joke";
import Character from "../pages/Character";

export const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/joke', element: <Joke /> },
    { path: '/character', element: <Character /> },
  ])
  