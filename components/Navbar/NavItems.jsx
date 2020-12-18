import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const defaultNavItems = [
   { title: 'Home', path: "/"  },
   { title: 'Products', path: "/products"  },
   { title: 'About', path: "/about"  },
   { title: 'Contact Us', path: "/contact"  },
]

export default function NavItems({ navItems = defaultNavItems,onLinkChange ,className, childClassName }) {
   const { pathname } = useRouter();
   const [currLocation, setCurrLocation] = useState('/');

   useEffect(() => {
      setCurrLocation(pathname);
   }, [pathname])

   const setStylesOnPath = (path) => {
      let classes = "transition-all border-b-2 hover:border-red-500";

      if (path !== currLocation) return classes += " border-transparent";

      return classes += " border-primary";
   }


   return (
      <ul className={`${className}`} >
         {navItems.map(({ title, path }) => (
            <li key={title} className={childClassName}>
               <Link href={path}>
                  <a onClick={onLinkChange} className={setStylesOnPath(path)}>{title}</a>
               </Link>
            </li>
         ))}
      </ul>
   )
}
