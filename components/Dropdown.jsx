import React, { useState } from 'react'
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs'
import { BiFilterAlt } from 'react-icons/bi'

export default function dropdown() {
   const [isOpen, setIsOpen] = useState(false);
   const [filterBy, setFilterBy] = useState('date')

   const onDropdownItemClick = ({ target: { id } }) => setFilterBy(id);

   return (
      <div style={{ WebkitTapHighlightColor: 'transparent' }} onClick={() => setIsOpen(!isOpen)} className="relative flex p-2 select-none cursor-pointer bg-secondary focus:outline-none  ">
         <div className="flex items-center text-gray-400"><BiFilterAlt /></div>
         <div className="mx-2">Filter by {filterBy}</div>
         <div className="flex items-center">
            {isOpen ? <BsArrowUpShort /> : <BsArrowDownShort />}
         </div>

         {isOpen && <div onMouseLeave={() => setIsOpen(false)} className="z-10 w-full absolute top-full bg-gray-100 rounded-sm shadow-md">
            <ul className="">
               <li onClick={onDropdownItemClick} id="date" className="p-2 hover:bg-gray-200">Date</li>
               <li onClick={onDropdownItemClick} id="name" className="p-2 hover:bg-gray-200">Name</li>
               <li onClick={onDropdownItemClick} id="price" className="p-2 hover:bg-gray-200">Price</li>
            </ul>
         </div>}
      </div>
   )
}
