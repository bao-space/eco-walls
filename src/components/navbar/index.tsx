import "./styles.css"
import { NavLink } from "react-router-dom"
import Logo from "../../assets/logo_ecowalls.png"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useContext, useEffect, useState } from "react"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"

export function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Produto", path: "/" },
    { name: "Vendas", path: "/shop" },
    { name: "Serviços", path: "/services" },
    { name: "Sobre nós", path: "/about-us" },
  ]

  const [itemsInCart, setItemsInCart] = useState(0)

  const { cartItems } = useContext(ShoppingCartContext)

  useEffect(() => {
    const totalItemsInCart = cartItems.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)

    setItemsInCart(totalItemsInCart)
  }, [cartItems])

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

          <div className="shop-cart-container">
            <div className="shop-cart">
              <AiOutlineShoppingCart size={27} />
            </div>
            <p>Carrinho ({itemsInCart})</p>
          </div>
        </div>
      </div>
      <div className="ghost-container" />
    </>
  )
}
