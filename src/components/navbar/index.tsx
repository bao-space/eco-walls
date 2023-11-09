import "./styles.css"
import { NavLink } from "react-router-dom"
import Logo from "../../assets/logo_ecowalls.png"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useContext, useEffect, useState } from "react"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"
import { Navbar } from "flowbite-react"

export function Nav() {
  const links = [
    { name: "Home", path: "/" },
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
      <Navbar fluid={true} className="bg-white dark:bg-white sticky">
        <Navbar.Brand>
          <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Eco wall logo" />
        </Navbar.Brand>
        <Navbar.Toggle className="dark:bg-white dark:border-green-400 dark:hover:bg-green-400 " />
        <Navbar.Collapse>
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="flex items-center justify-center link"
            >
              <p>{link.name}</p>
            </NavLink>
          ))}
          <div className="flex items-center justify-center">
            <div className="shop-cart">
              <AiOutlineShoppingCart size={27} />
            </div>
            <p>Carrinho ({itemsInCart})</p>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
