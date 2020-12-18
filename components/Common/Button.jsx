import React from 'react'

import { Loader } from '../Common';

export default function Button({ variant = "primary",className, label = "Button",loading = false, onClick }) {
   return (
      <button 
         onClick={onClick}
         className={`${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`}
      >
         {label}
         {loading && <div className="ml-2">
            <Loader size="sm"/>
         </div>}
      </button>
   )
}
