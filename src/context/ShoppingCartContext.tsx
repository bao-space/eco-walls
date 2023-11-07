import React, { createContext, useEffect, useState } from "react"

interface ShoppingCartContextData {
  cartItems: ShoppingCartItems[]
  addProductToShoppingCart: (id: number) => void
  removeProductFromShoppingCart: (id: number) => void
  removeItemFromCart: (id: number) => void
  clearShoppingCart: () => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextData)

export interface ShoppingCartItems {
  id: number
  quantity: number
}

interface ShoppingCartProviderProps {
  children: React.ReactNode
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, SetCartItems] = useState<ShoppingCartItems[]>(
    getItemsFromLocalStorage()
  )

  function addProductToShoppingCart(id: number) {
    const productAlreadyExists = cartItems.some((item) => item.id === id)

    if (productAlreadyExists) {
      const updatedShoppingCartItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )

      SetCartItems(updatedShoppingCartItems)
    } else {
      SetCartItems([...cartItems, { id, quantity: 1 }])
    }
  }

  function clearShoppingCart() {
    SetCartItems([])
  }

  function removeProductFromShoppingCart(id: number) {
    const updatedShoppingCartItems = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0)

    SetCartItems(updatedShoppingCartItems)
  }

  function getItemsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("@eco-wall/cartItems")!) || []
  }

  function removeItemFromCart(id: number) {
    const updatedShoppingCartItems = cartItems.filter((item) => item.id !== id)

    SetCartItems(updatedShoppingCartItems)
  }

  useEffect(() => {
    localStorage.setItem("@eco-wall/cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addProductToShoppingCart,
        removeProductFromShoppingCart,
        removeItemFromCart,
        clearShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
