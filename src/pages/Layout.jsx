import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        {/** Load child page contents */}
        <h1>Layout</h1>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
