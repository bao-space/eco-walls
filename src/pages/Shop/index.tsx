import "./styles.css"

import { Banner } from "../../components/banner"
import ShopBanner from "../../assets/Banner-shop.png"

import { products } from "./products/products"
import { Product } from "./products"
import { useEffect, useState } from "react"

type Product = {
  id: number
  name: string
  price: number
}

export function Shop() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<Product[]>([])

  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm])

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

      <div className="search-input-container flex items-end justify-end ">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white outline-none"
            placeholder="Procurar vegetais"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="products-container">
        {searchResults.map((product) => (
          <Product
            name={product.name}
            price={product.price}
            id={product.id}
            key={product.id}
          />
        ))}
      </div>

      <section className="shop-section w-100 ">
        <h2>Personalize sua Horta</h2>
        <div className="shop-container">
          <div className="shop-option-container">
            <h3>Escolha a quantidade de andares</h3>

            <span>
              Escolha a quantidade de andares para sua horta vertical e crie um
              espaço de cultivo personalizado de acordo com suas preferências e
              necessidades de jardinagem.
            </span>

            <select
              id="small"
              className="block w-40 p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-blu dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="3" selected>
                3
              </option>
              {gardenStagesOptions.map(({ id, stages }) => (
                <option key={id} value={id}>
                  {stages}
                </option>
              ))}
            </select>
          </div>

          <div className="shop-option-container">
            <h3>Escolha a tamaho</h3>
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />

            <datalist id="size-suggestions">
              {gardenSizeOptions.map((option) => (
                <option key={option.id}>{option.size}</option>
              ))}
            </datalist>
          </div>
        </div>
      </section>
    </>
  )
}
