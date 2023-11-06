import "./styles.css"

import { Banner } from "../../components/banner"
import ShopBanner from "../../assets/Banner-shop.png"

import { products } from "./products/products"
import { Product } from "./products"

export function Shop() {
  return (
    <>
      <Banner backgroundImg={ShopBanner} text="Vendas" />
      <div className="shop-container"></div>

      <div className="products-container">
        {products.map((product) => (
          <Product
            name={product.name}
            price={product.price}
            key={product.name}
          />
        ))}
      </div>
    </>
  )
}
