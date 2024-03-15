import React, { createContext, useState } from "react";
import all_products from '../Components/Assets/all_product';

export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_products.length+1; index++) {
        cart[index] = 0;
        
    }
    return cart;
}
const ShopContextProvider = (props)=>{
        const [CartItems,setCartItems] = useState(getDefaultCart());
        
        
        const addToCart = (itemId)=>{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
            
        }
        const removeFromCart = (itemId)=>{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        }

        const getTotalCartAmount = () => {
            let totalAmount = 0;
            for (const item in CartItems){
                if(CartItems[item]>0){
                    let itemInfo = all_products.find((product)=>product.id===Number(item));
                    totalAmount += itemInfo.new_price * CartItems[item];
                }
                
            }
            return totalAmount;
        }
        const getTotalCartItems = () => {
            let totalItem = 0;
            for(const item in CartItems)
            {
                if(CartItems[item]>0)
                {
                    totalItem += CartItems[item];
                }
            }
            return totalItem;
        }

        const ContextValue = {getTotalCartItems,getTotalCartAmount,all_products,CartItems,addToCart,removeFromCart};
        return(
            <ShopContext.Provider value={ContextValue}>
                {props.children}
            </ShopContext.Provider>
        )
}
export default ShopContextProvider;