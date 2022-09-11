import { createContext, useState } from "react";

// import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.utils";

import PRODUCTS from '../shop-data.json'

// The actual value you want to access
export const ProductsContext = createContext({
  products: []
})


export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS)
  const value = { products }
  
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}