import React from 'react'
import { Button } from '../Common'

function HeroSection() {
   return (
      <div className="w-full bg-fixed h-70vh bg-auto bg-no-repeat bg-center background-content " >
         <div className="transform -translate-y-1/2 text-gray-100 absolute top-1/2 right-1/4  w-max">
            <h1 className="space-y-1 text-right flex flex-col border-r-4 pr-1 text-3xl">
               <span>Products</span>
               <span>Now,</span>
               <span>At your Home</span>
            </h1>
            {/* <button className="mt-4 p-2 w-full bg-primary">Shop</button> */}
            <Button label="Shop Now" className="mt-4 text-xl" />
         </div>
      </div>
   )
}

export default HeroSection
