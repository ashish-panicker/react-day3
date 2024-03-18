import { Link } from "react-router-dom"

const NavLink = (props) => {
  return (
    <Link className="link" to={props.linkText}>{props.linkText}</Link>
  )
}
export default NavLink
