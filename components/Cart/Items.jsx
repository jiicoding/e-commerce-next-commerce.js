import React from 'react'
import Card from './Card';

export default function Items({ items }) {
   return (
      <>
         {items.map(item => (
            <Card 
               key={item.id} 
               item={item} 
            />
         ))}
      </>
   )
}
