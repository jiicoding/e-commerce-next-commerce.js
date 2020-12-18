import React from 'react'
import Card from './Card';

export default function Items({ items = [], variant }) {
   return (
      <>
         {items.map(item => (
            <Card key={item.id} item={item} variant={variant} />
          ))}
      </>
   )
}
