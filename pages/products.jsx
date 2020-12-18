import React, { useEffect } from 'react'

import Filteration from '../components/Filteration';
import { Items } from '../components/Products';
import { Loader, Toast } from '../components/Common';
import { fetchAllProducts } from '../services/products';
import useProduct from '../hooks/useProduct';

export default function products({ products: staticProducts }) {
   const { isToast, toast, onSetToast, loading, products } = useProduct(staticProducts);

   return (
      <div className="container my-4">
         <h1 className="text-center" >Products</h1>
         <Filteration />
         <div className="mt-8">
            {isToast && <Toast toast={toast} onSetToast={() => onSetToast(false, "")} />}
            {loading ? <Loader /> : 
             <Items items={products} />}
         </div>
      </div>
   )
}

export async function getStaticProps() {
   const { products, meta, error } = await fetchAllProducts();

   return {
     props: {
        products
     },
   }
 }
