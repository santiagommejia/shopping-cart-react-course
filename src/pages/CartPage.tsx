import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const CartPage = () => {

  const { cartProducts, increaseQuantity, decreaseQuantity, removePurchase } = useContext(CartContext)
  const calculateTotal = () => {
    return cartProducts.reduce((acc: number, product: any) => acc + product.price * product.quantity, 0).toFixed(2)
  }
  const handlePrint = () => { print() }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          { cartProducts.map((product: any) => (
              <tr key={product.id}>
                <th scope="row">{product.title}</th>
                <td>{product.price}</td>
                <td>
                  <button className="btn" onClick={() => decreaseQuantity(product.id)}>-</button>
                  <button className="btn btn-primary">{product.quantity}</button>
                  <button className="btn" onClick={() => increaseQuantity(product.id)}>+</button>
                </td>
                <td><button type="button" className="btn btn-danger" onClick={() => removePurchase(product.id)}>Remove</button></td>
              </tr>
            ))
          }
          { cartProducts.length > 0 
           ? <tr key="total">
              <th><b>Total:</b></th>
              <td>${calculateTotal()}</td>
              <td></td>
              <td></td>
            </tr>
           : <></>
          }
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button disabled={cartProducts.length < 1} className="btn btn-primary" onClick={() => handlePrint()}>Buy</button>
      </div>
    </>
  )
}
