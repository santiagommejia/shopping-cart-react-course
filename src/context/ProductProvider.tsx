import { useEffect, useState } from "react"
import { ProductContext } from "./ProductContext"

export const ProductProvider = ({children}: {children: any}) => {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const url = 'https://fakestoreapi.com/products'
    const response = await fetch(url)
    const data = await response.json();
    console.log(data)
    setProducts(data)
  }

  useEffect(() => {fetchProducts() }, [])


  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  )
}
