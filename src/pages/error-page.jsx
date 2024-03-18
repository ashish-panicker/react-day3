import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <div className="article">
      <h2>Error</h2>
      <p>Requested resource {error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage
