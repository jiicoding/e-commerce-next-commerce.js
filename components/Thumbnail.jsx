import React, { useEffect, useState } from 'react'
import { getImage } from '../services/images'

export default function Thumbnail() {
   const [images, setImages] = useState([]);

   useEffect(() => {
      getImages();
   }, [])
   
   
   const getImages = async () => {
      const check = await getImage('Protectors');
      console.log(check);

      setImages(check);
   }

   return (
      <div>
         {images.map(image => (
            <div>
               <img src={image.urls.thumb}/>
            </div>
         ))}
      </div>
   )
}
