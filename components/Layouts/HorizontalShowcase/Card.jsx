import React from 'react'

export default function Card({ item, variant = "landscape" }) {
   let img = item.img;
   let name = item.name;
   let price = item.price;
   if (variant !== "landscape") img = item.media.source;

   function styleParent() {
      if (variant === "landscape") return "w-48 h-40 md:w-80 md:h-60";
      return "w-40 h-48 md:w-64 md:h-80";
   }

   return (
      <div className={`${styleParent()} active-shrink relative m-2 inline-block bg-pink-100`}>
         <img className="w-full h-full object-cover bg-center" src={img}/>
         <div className="bg-gray-800 w-full h-full opacity-40 absolute top-0 left-0"></div>
         <div className="cursor-pointer select-none absolute bottom-4 bg-primary w-11/12 left-1/2 transform -translate-x-1/2">
            <h3 className="text-white text-center md:text-xl md:my-2 my-1">{name}</h3>
            {price && <h2 className="text-white text-center text-sm font-semibold md:text-xl md:my-2 my-1">{price.formatted_with_code}</h2>}
         </div>
      </div>
   )
}
