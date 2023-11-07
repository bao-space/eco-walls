import "./styles.css"
import { NavLink } from "react-router-dom"
import Logo from "../../assets/logo_ecowalls.png"

export function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Produto", path: "/" },
    { name: "Vendas", path: "/shop" },
    { name: "Sobre nós", path: "/about-us" },
  ]

  return (
    <>
      <div className="navbar-container">
        <div className="links-container">
          <div className="logo">
            <img src={Logo} alt="logo" width="100px" />
          </div>

          <nav className="link-container">
            {links.map((link) => (
              <NavLink key={link.name} to={link.path}>
                <p>{link.name}</p>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
      <div className="ghost-container" />
    </>
  )
}
