import React from 'react'

import Dropdown from './Dropdown'
import Search from './Search';

export default function Filteration() {
   return (
      <div className="flex flex-row justify-center flex-wrap">
         <div className="my-2 mx-4">
            <Search />
         </div>
         <div className="my-2 mx-4">
            <Dropdown />
         </div>
      </div>
   )
}
