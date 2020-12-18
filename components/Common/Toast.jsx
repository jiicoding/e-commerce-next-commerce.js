import React from 'react'
import { FiInfo } from 'react-icons/fi'
import { GiCancel } from 'react-icons/gi'
import useCart from '../../hooks/useCart'

export default function Toast({ toast, className }) {
   const { onSetToast } = useCart();

   const handleClickToast = () => {
      setTimeout(() => {
         onSetToast(false, "");
      }, 200);
   }

   return (
      <div className={`${className} flex justify-center`}>
         <div className="animate-zoomInOut flex justify-between bg-primary px-4 py-2">
            <div className="flex">
               <div className="flex justify-center items-center mr-2"><FiInfo size={25} /></div>   
               <div className="text-lg font-medium">{toast}</div>
            </div>
            <div className="flex ml-8">
               <div className="cursor-pointer animate-pulse active:scale-95 transform flex justify-center items-center">
                  <GiCancel onClick={handleClickToast} size={25} />
               </div>
            </div>
         </div>
      </div>
   )
}
