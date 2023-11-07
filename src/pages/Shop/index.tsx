import "./styles.css"

import { Banner } from "../../components/banner"
import ShopBanner from "../../assets/Banner-shop.png"

import { products } from "./products/products"
import { Product } from "./products"

export function Shop() {
  const gardenSizeOptions = [
    {
      id: 1,
      size: "1,5m x 2,0m x 0,2m",
    },
    {
      id: 2,
      size: "1,8m x 2,5m x 0,2m",
    },
    {
      id: 3,
      size: "2,1m x 3,0m x 0,2m",
    },
    {
      id: 4,
      size: "2,1m x 4,0m x 0,2m",
    },
  ]

  const gardenStagesOptions = [
    {
      id: 1,
      stages: 1,
      price: 2000,
    },
    {
      id: 2,
      stages: 2,
      price: 3500,
    },
    {
      id: 3,
      stages: 3,
      price: 5200,
    },
    {
      id: 4,
      stages: 4,
      price: 5200,
    },
    {
      id: 5,
      stages: 5,
    },
  ]

  return (
    <>
      <Banner backgroundImg={ShopBanner} text="Vendas" />
      <div className="shop-container">
        <div className="shop-option-container">
          <h3>Escolha a quantidade de andares da sua horta</h3>

          <span>
            Escolha a quantidade de andares para sua horta vertical e crie um
            espaço de cultivo personalizado de acordo com suas preferências e
            necessidades de jardinagem.
          </span>

          <select
            id="small"
            className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-blu dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="3" selected>
              3
            </option>
            {gardenStagesOptions.map((option) => (
              <option value={option.id}>{option.stages}</option>
            ))}
          </select>
        </div>
        <div className="shop-option-container">
          <h3>Escolha a tamaho da sua horta</h3>
          <span>
            Escolha o tamanho da sua horta vertical. Nossas opções variam de
            hortas compactas perfeitas para espaços menores a hortas maiores
            para quem deseja cultivar uma variedade de plantas. Selecione o
            tamanho que melhor atende às suas necessidades de jardinagem e
            espaço disponível.
          </span>

          <input
            list="size-suggestions"
            type="text"
            id="size-input"
            placeholder="Selecione o tamanho da horta"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />

          <datalist id="size-suggestions">
            {gardenSizeOptions.map((option) => (
              <option key={option.id}>{option.size}</option>
            ))}
          </datalist>
        </div>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <Product
            name={product.name}
            price={product.price}
            id={product.id}
            key={product.id}
          />
        ))}
      </div>
    </>
  )
}
