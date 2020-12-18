import React, { useContext, useEffect } from 'react'
import Link  from 'next/link'

import { cartContext } from '../contexts/cart';
import { BottomBar, Items } from '../components/Cart'
import { Loader, Toast } from '../components/Common';
import { CartWrapper } from '../components/Pages';

export default function cart() {
   const { 
      cartItems, 
      cartTotal, 
      itemsCount,
      loading, 
      loadingOnUpdate, 
      isToast, 
      toast,
      onSetToast,
   } = useContext(cartContext);

   useEffect(() => {
      return () => {
         onSetToast(false, "")
      }
   }, [])

   return (
      <CartWrapper>
         {isToast && <Toast toast={toast} />}
         {loading ? <Loader /> : <>
            {itemsCount > 0 && <>
               <Items items={cartItems} />
               <BottomBar 
                  total={cartTotal} 
                  loading={loadingOnUpdate}
               />
            </>}
         </>}
         {(!loading && itemsCount === 0) && <h1 className="underline text-center mt-4">
            <Link href="/products"><a>Go Back to Products</a></Link>  
         </h1>}
      </CartWrapper>
   )
}
