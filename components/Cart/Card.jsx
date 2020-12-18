import React, { useContext, useEffect, useState } from 'react';

import { cartContext } from '../../contexts/cart';
import useCart from '../../hooks/useCart';
import Loader from '../../public/loader.svg';

export default function Card({ item }) {
   const { onUpdateCart } = useCart();
   const [quantityState, setQuantityState] = useState(0);
   const [loading, setLoading] = useState(false);
   

   useEffect(() => {
      setQuantityState(quantity);

      return () => {
         setLoading(false);
      }
   }, [])

   // Props Destructuring
   const { id, product_name: title, quantity, price, line_total: total } = item;

   // Handlers
   const onUpdate = async (addIn) => {
      let prevQuantity = quantityState;
      let updatedQuantity = quantityState + addIn;

      if (updatedQuantity < 0) return;

      setLoading(true);
      setQuantityState(updatedQuantity)
      const { cart } = await onUpdateCart(id, { quantity: updatedQuantity });
      setLoading(false);

      if (!cart) setQuantityState(prevQuantity);
   }

   return (
      <div className="bg-secondary my-2 px-4 flex flex-col">
         <div className="py-2 border-b">
            <h1 className="my-1">{title}</h1>
            <h3 className="my-1">Price: <span>{price.formatted_with_code}</span></h3>
            <div className="flex">
               <h3 className="my-1 mr-4">Quantity: </h3>
               <div className="flex justify-center">
                  <button 
                     className="bg-gray-300 focus:outline-none active:scale-95 transform px-4 rounded-sm text-2xl"
                     onClick={() => onUpdate(-1)}   
                  >-
                  </button>
                  <h2 className="flex items-center mx-4">{quantityState}</h2>
                  <button 
                     className="bg-gray-300 focus:outline-none active:scale-95 transform px-4 rounded-sm text-2xl"
                     onClick={() => onUpdate(+1)} 
                  >
                     +
                  </button>
               </div>
            </div>
         </div>
         <div className="flex justify-between py-2">
            <h3 className="text-xl sm:text-2xl">Total: 
               <span className="text-xl sm:text-2xl font-bold ml-2">{total.formatted_with_code}</span>
            </h3>
            <span className="">{loading && <Loader />}</span>   
         </div>
      </div>
   )
}
