import "./styles.css"
import { NavLink } from "react-router-dom"
import Logo from "../../assets/logo_ecowalls.png"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useContext, useEffect, useState } from "react"
import { ShoppingCartContext } from "../../context/ShoppingCartContext"
import { Button, Navbar as Nav } from "flowbite-react"

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
      {/* <Nav>
        <Nav.Brand href="https://flowbite-react.com">
          <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>

          <div>
            <div className="shop-cart-container">
              <div className="shop-cart">
                <AiOutlineShoppingCart size={27} />
              </div>
              <p>Carrinho ({itemsInCart})</p>
            </div>
          </div>
        </Nav.Brand>
        <div className="flex md:order-2">
          <Button>Get started</Button>
          <Nav.Toggle />
        </div>
        <Nav.Collapse>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            {links.map((link) => (
              <Nav.Link key={link.name} to={link.path}>
                <li>
                  <p
                    aria-current="page"
                    className="navlink block py-2 pl-3 pr-4 text-white md:p-0 "
                  >
                    {link.name}
                  </p>
                </li>
              </Nav.Link>
            ))}
          </div>
        </Nav.Collapse>
      </Nav> */}

      {/* <nav >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center">
            <img src={Logo} className="h-8 mr-3" alt="Eco Walls Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Eco Walls
            </span>
          </a>
          <div className="flex md:order-2">
            <div className="shop-cart-container">
              <div className="shop-cart">
                <AiOutlineShoppingCart size={27} />
              </div>
              <p>Carrinho ({itemsInCart})</p>
            </div>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
             
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  )
}
