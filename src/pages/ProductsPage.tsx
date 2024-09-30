import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductContext } from "../context/ProductContext"
import { CartContext } from "../context/CartContext";

export const ProductsPage = () => {
  const { products } = useContext(ProductContext);
  const { addPurchase, removePurchase } = useContext(CartContext)

  const handleAddProduct = (product: any) => { addPurchase(product) }
  const handleRemoveProduct = (id: number) => { removePurchase(id) }

  return (
    <>
      <h1>Purchases:</h1>
      <hr />
      {products.map((product: any) => (
        <Card 
          key={product.id} 
          image={product.image} 
          title={product.title} 
          description={product.description} 
          price={product.price}
          handleAddProduct={ () => handleAddProduct(product)}
          handleRemoveProduct={() => handleRemoveProduct(product.id)}
        ></Card>
      ))}
    </>
  )
}
