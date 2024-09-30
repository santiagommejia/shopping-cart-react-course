import { useState } from "react"
import '../styles/card.css'

export const Card = (
  {image, title, description, price, handleAddProduct, handleRemoveProduct}: 
  {image: string, title: string, description: string, price: number, handleAddProduct: Function, handleRemoveProduct: Function }) => {

  const [added, setAdded] = useState(false)
  const addProduct = () => { handleAddProduct(); setAdded(true) }
  const removeProduct = () => { handleRemoveProduct(); setAdded(false) }
  return (
    <div className="tarjeta">
      <img src={image} alt={title} className="tarjeta-imagen"></img>
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{title}</h3>
        <p className="tarjeta-descripcion">{description}</p>
        <p className="tarjeta-precio">{price}</p>
        {added 
          ? <button type="button" className="boton-quitar" onClick={removeProduct}>Remove from Cart</button>
          : <button type="button" className="boton-agregar" onClick={addProduct}>Add to Cart</button>
        }
      </div>
    </div>
  )
}
