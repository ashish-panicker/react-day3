import axios from 'axios'
import React from 'react'

const Character = () => {
  // https://thronesapi.com/api/v2/Characters/:id
  /**
   * HTTP Request
   * GET, POST, PUT, PATCH, DELETE
   *
   * Status codes and meaning
   * 200 => OK
   * 201 => Created
   *
   * <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status'>Status codes</a>
   *
   * 1xx [100-199]   informational responses
   * 2xx [200-299]   success
   * 3xx [300-399]   redirection
   * 4xx [400-499]   client error
   * 5xx [500-599]   server error
   */

  const [data, setData] = React.useState({})
  const [index, setIndex] = React.useState(0)

  const nextClickHandler = () => {
    setIndex(index + 1)
  }

  React.useEffect(() => {
    axios
      .get(`https://thronesapi.com/api/v2/Characters/${index}`)
      .then((response) => setData(response.data))
  }, [index])

  return (
    <div className="article">
      <div className="article-title">
        <h2>{data.fullName}</h2>
        <button className="button" onClick={nextClickHandler}>
          Next
        </button>
      </div>
      <div className="container">
        <img src={data.imageUrl} alt={data.fullName} />
      </div>
    </div>
  )
}

export default Character
