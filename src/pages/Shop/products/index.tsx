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

type ProductProps = {
  name: string
  price: string
}

export function Product({ name, price }: ProductProps) {
  const path = getPath(name)

  return (
    <div className="item-container">
      <div className="promo-input">Oferta</div>

      <img src={path} alt="" width={"300px"} />

      <div className="product-container">
        <h3>{name}</h3>
        <div className="price-container">
          <h4>{price}</h4>
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
