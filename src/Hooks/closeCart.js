import { useState } from 'react';

export function useCloseCart(){
   const [closeCart, setCloseCart] = useState(true);
   return {
        closeCart,
        setCloseCart
   } 
}