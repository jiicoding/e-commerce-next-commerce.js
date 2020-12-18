import React from 'react'

export default function Wrapper({ label = "Products", children }) {
   return (
      <div className="mb-10">
        <h1 className="mt-12 mb-4 text-center text-4xl tracking-wider">{label}</h1>
         {children}
      </div>
   )
}
