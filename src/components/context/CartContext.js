import { createContext, useContext } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const CartContext = createContext({
    products: [],
    addToCart: () => {},
    clearCart: () => {},
    count: 0,
    
})


const useCart = () => { 
    return useContext(CartContext)
 }


 
 
 const CartContextProvider = ({children}) => {

const [products, setProducts] = useLocalStorage('products', [])

const getTotalPrice = () => { return cart.reduce((prev, act) => prev + act.count * act.price, 0); }

const addToCart = ( product ) => {  
setProducts(products => [...products, product ])
}


const clearCart = () => {
    setProducts([])
}

    const context ={
        products: products,
    addToCart: addToCart,  /* en referencia a las funciones con el mismo nombre */
    clearCart: clearCart,
    count: products.length,
    getTotalPrice: getTotalPrice
    }

   return (
     <CartContext.Provider value={context}>
        {children}
     </CartContext.Provider>
   )
 }
 
 export {useCart, CartContextProvider}

 /* para cargar al carrito */