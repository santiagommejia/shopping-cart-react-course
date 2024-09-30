import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const NavBar = () => {
  const { cartProducts } = useContext(CartContext)

  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink to="/" className="navbar-brand">Cart</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink to="/" className="nav-link">Shopping</NavLink>
      </li>
    </ul>
    <NavLink to="/cart">
    <Badge badgeContent={cartProducts.length} color="primary">
      <ShoppingCart color="action" />
    </Badge>
    </NavLink>
  </div>
</nav>
  )
}
