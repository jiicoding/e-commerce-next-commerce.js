import React, { useContext } from 'react'

import { Button, Loader } from '../../components/Common'
import { cartContext } from '../../contexts/cart';

export default function BottomBar({ total, loading: loadingOnUpdate }) {
   const { onClearCart, loadingOnClearCart, loadingOnCheckoutCart } = useContext(cartContext);

   const handleClearCart = async () => {
      await onClearCart();
   }

   return (
      <div className="sticky bottom-4 shadow-xl rounded-sm bg-gray-300 flex justify-between flex-wrap mx-4 my-8 px-4 py-4 md:py-2">
         <div className="flex items-center">
            <h1 className="font-medium">Rs. 
               <span className="ml-2 text-2xl md:text-3xl font-normal">
               {total.formatted_with_code}
               </span>
            </h1>
            <span className="ml-4">{loadingOnUpdate && <Loader />}</span>
         </div>
         <div className="w-full lg:w-max flex flex-wrap justify-center sm:p-4 pt-4">
            <div className="mx-2 w-full sm:w-32 ">
               <Button label="Checkout" className="mt-1" onClick={handleClearCart} loading={loadingOnCheckoutCart} />
            </div>
            <div className="mx-2 w-full sm:w-32">
               <Button label="Clear" variant="secondary" className="mt-1" onClick={handleClearCart} loading={loadingOnClearCart} />
            </div>
         </div>
      </div>
   )
}
