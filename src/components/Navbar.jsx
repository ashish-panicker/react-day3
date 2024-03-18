import Navlink from './Navlink'

const Navbar = () => {
  const links = ['Home', 'Joke', 'Character']

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-text">Learn react</span>
      </div>
      <div className="links">
        {links.map((link) => {
          return <Navlink linkText={link} key={link} />
        })}
      </div>
    </nav>
  )
}

export default Navbar
