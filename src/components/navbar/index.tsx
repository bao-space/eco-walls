import "./styles.css"
import { NavLink } from "react-router-dom"

export function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Produto", path: "/" },
    { name: "Vendas", path: "/" },
    { name: "Sobre nós", path: "/about-us" },
  ]

  return (
    <div className="navbar-container">
      <div className="links-container">
        <div className="logo">Eco wall</div>

        <nav className="link-container">
          {links.map((link) => (
            <NavLink key={link.name} to={link.path}>
              <p>{link.name}</p>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}
