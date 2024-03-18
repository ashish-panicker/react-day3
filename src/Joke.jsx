import { useEffect, useState } from 'react'

const Joke = () => {
  console.log('Joke componenet rendered.')

  // a state variable joke with a empty string value
  const [joke, setJoke] = useState('')
  const [next, setNext] = useState(1)

  // generating a random number between 1 and 100
  //   const randomNumber = Math.floor(Math.random() * 100)

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((jsonData) => setJoke(jsonData.value))
  }, [next])

  const nextButtonClick = () => {
    console.log(next)
    setNext(next + 1)
  }

  // 1. making a call to the api
  // 2. convert the http response to json
  // 3. setting the data into the joke state variable
  // whenever the state changes react will re-render the component
  //   fetch('https://api.chucknorris.io/jokes/random')
  //     .then((response) => response.json())
  //     .then((jsonData) => setJoke(jsonData.value))

  return (
    <div className="article">
      <div className="article-title">
        <h2>Joke of the day</h2>
        <button className="button" onClick={nextButtonClick}>Next Joke</button>
      </div>
      <div>
        <p>{joke}</p>
      </div>
    </div>
  )
}

export default Joke
