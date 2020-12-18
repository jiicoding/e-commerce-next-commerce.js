import React, { useState, useContext } from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';

import { Button } from '../Common';
import { cartContext } from '../../contexts/cart';

export default function Card({ item: { id, name, media: { source: img }, price } }) {
   const [loading, setLoading] = useState(false);
   const { onAddItemToCart } = useContext(cartContext);

   const handleAddToCart = async () => {
      setLoading(true);

      await onAddItemToCart(id, 1);
      
      setLoading(false);
   };

   return (
      <div className="w-full sm:w-64 h-82 p-4">
         <div className="relative bg-red-100 overflow-hidden bg-center h-70%">
            <img className="w-full h-full object-cover" src={img} alt={name}/>
         </div>
         <div className="bg-secondary h-30% px-4 py-2">
            <h2 className="text-lg font-medium font-montserrat overflow-hidden overflow-ellipsis whitespace-nowrap">{name}</h2>
            <h3 className="">Price: <span className="font-semibold text-base">{price.formatted_with_code}</span></h3>
            <div className="mt-2 flex flex-row items-center">
               <div className="p-1 mr-2 flex-1 flex transition-width">
                  {/* <button 
                     className="btn-primary focus:outline-none active:shadow-lg"
                     onClick={handleAddToCart}
                  >
                     Add to Cart
                  </button>
                  {loading && <div className="ml-1"><Loader /></div>} */}
                  <Button label="Add to Cart" loading={loading} onClick={handleAddToCart} />
               </div>
               <button className="focus:outline-none active:transform active:scale-90" >
                  {false ? <BsHeartFill color="#EF4444" size={25} /> : <BsHeart  size={25} />}
               </button>
            </div>
         </div>
      </div>
   )
}
