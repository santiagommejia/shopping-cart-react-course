import { useReducer } from "react"
import { CartContext } from "./CartContext"

const initialState: any = []

export const CartProvider = ({children}: { children: any}) => {

  const addPurchase = (purchase: any) => {
    purchase.quantity = 1
    const action = { type: '[CART] Add Purchase', payload: purchase }
    dispatch(action)
  }

  const increaseQuantity = (id: number) => {
    const action = { type: '[CART] Increase Quantity', payload: id }
    dispatch(action)  
  }

  const decreaseQuantity = (id: number) => {
    const action = { type: '[CART] Decrease Quantity', payload: id }
    dispatch(action) 
  }

  const removePurchase = (id: number) => {
    const action = { type: '[CART] Remove Purchase', payload: id }
    dispatch(action)
  }

  const purchasesReducer = (state = initialState, action: {type: string, payload: any}) => {
    switch (action.type) {
      case '[CART] Add Purchase':
        return [...state, action.payload]
      case '[CART] Increase Quantity':
        return state.map((purchase: any) => {
          const quantity = purchase.quantity + 1
          if (purchase.id === action.payload) {
            return {...purchase, quantity}
          }
          return purchase
        })
      case '[CART] Decrease Quantity':
        return state.map((purchase: any) => {
          const quantity = purchase.quantity - 1
          if (purchase.id === action.payload && purchase.quantity > 1) {
            return {...purchase, quantity}
          }
          return purchase
        })
      case '[CART] Remove Purchase':
        return state.filter((purchase: any) => purchase.id !== action.payload)
      default:
        return state
    }
  }

  const [cartProducts, dispatch] = useReducer(purchasesReducer, initialState)
  
  return (
    <CartContext.Provider value={{cartProducts, addPurchase, increaseQuantity, decreaseQuantity, removePurchase}}>
      {children}
    </CartContext.Provider>
  )
}
