import "./styles.css"

import Acelga from "../../../assets/Acelga.png"
import Alecrim from "../../../assets/Alecrim.png"
import Alface from "../../../assets/Alface.png"
import Beterraba from "../../../assets/Beterraba.png"
import Cebolinha from "../../../assets/Cebolinha.png"
import Cenoura from "../../../assets/Cenoura.png"
import Coentro from "../../../assets/Coentro.png"
import Espinafre from "../../../assets/Espinafre.png"
import Hortela from "../../../assets/Hortela.png"
import Lavanda from "../../../assets/Lavanda.png"
import Manjericao from "../../../assets/Manjericao.png"
import Oregano from "../../../assets/Oregano.png"
import Pimenta from "../../../assets/Espinafre.png"
import Salsa from "../../../assets/Salsa.png"
import Tomate from "../../../assets/Tomate cereja.png"
import Tomilho from "../../../assets/Tomilho.png"

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { useContext } from "react"
import { ShoppingCartContext } from "../../../context/ShoppingCartContext"
type ProductProps = {
  name: string
  price: number
  id: number
}

export function Product({ name, price, id }: ProductProps) {
  const path = getPath(name)

  const value = formatAsCurrency(price)
  const oldValue = formatAsCurrency(price + 1)

  const { addProductToShoppingCart, removeProductFromShoppingCart, cartItems } =
    useContext(ShoppingCartContext)

  const item = cartItems.find((item) => item.id == id)

  function countAdd() {
    addProductToShoppingCart(id)
  }

  function countRemove() {
    removeProductFromShoppingCart(id)
  }

  return (
    <div className="item-container">
      <div className="promo-input">Oferta</div>

      <img src={path} alt="" width={"400px"} />

      <div className="product-container">
        <h3>{name}</h3>
        <div className="price-container">
          <div>
            <span>{oldValue}</span>

            <h4>{value}</h4>
          </div>
          <div className="count-container">
            <button type="button">
              <AiOutlineMinus size={18} weight="bold" onClick={countRemove} />
            </button>
            <p>{item?.quantity || 0}</p>
            <button type="button">
              <AiOutlinePlus size={18} weight="bold" onClick={countAdd} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function getPath(name: string) {
  switch (name) {
    case "Acelga":
      return Acelga

    case "Alecrim":
      return Alecrim

    case "Alface":
      return Alface

    case "Beterraba":
      return Beterraba

    case "Cebolinha":
      return Cebolinha

    case "Cenoura":
      return Cenoura

    case "Coentro":
      return Coentro

    case "Espinafre":
      return Espinafre

    case "Hortelã":
      return Hortela

    case "Lavanda":
      return Lavanda

    case "Manjericão":
      return Manjericao

    case "Orégano":
      return Oregano

    case "Pimenta":
      return Pimenta

    case "Salsa":
      return Salsa

    case "Tomate Cereja":
      return Tomate

    case "Tomilho":
      return Tomilho

    default:
      "Acelga"
  }
}

function formatAsCurrency(number: number) {
  return number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}
