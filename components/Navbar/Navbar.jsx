import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { FiMenu } from 'react-icons/fi'
import { BsHeartFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'

import Drawer from './Drawer';
import NavItems from './NavItems';
import BadgeIcon from '../BadgeIcon';
import IconsTray from '../IconsTray';
import { cartContext } from '../../contexts/cart';
import { Button, Loader } from '../Common';
import { globalContext } from '../../contexts/global';

const navItems = [
   { title: 'Home', path: "/"  },
   { title: 'Products', path: "/products"  },
   { title: 'About', path: "/about"  },
   { title: 'Blog', path: "/blog"  },
   { title: 'Contact Us', path: "/contact"  },
]

function Navbar() {
   const router = useRouter();
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
   const { itemsCount } = useContext(cartContext);
   const { loadingOnPageChange } = useContext(globalContext);

   const handleClickOnDrawerItem = () => {
      setTimeout(() => {
         setIsDrawerOpen(false);
      }, 200);
   }

   return (
      <> 
         <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen}>
            <Button onClick={handleClickOnDrawerItem} variant="primary" label="Close" className="mt-4 w-11/12 mx-auto" />
            <NavItems 
               navItems={navItems} 
               onLinkChange={handleClickOnDrawerItem}  
               className="flex flex-col"
               childClassName="mx-4 my-2 text-xl mt-4"
            />
         </Drawer>
         <nav className="flex container max-w-full sticky top-0 z-10 py-4 sm:px-16 px-7 bg-secondary">
            <Link href="/">
               <div className="flex justify-center items-center">
                  <h1 className="cursor-pointer text-base md:text-2xl">e-Commerce</h1>
               </div>
            </Link>

            <div className="flex justify-between items-center ml-16">
               <NavItems 
                  navItems={navItems} 
                  className="hidden lg:flex" 
                  childClassName="mx-2 my-1 text-lg"
               />


               <IconsTray className="absolute right-16">
                  {/* {loadingOnPageChange && <Loader className="mr-1 sm:mr-4" />} */}

                  <BadgeIcon badge={10}>
                     <BsHeartFill size={21} />
                  </BadgeIcon>
                  <BadgeIcon badge={itemsCount}>
                     <FaShoppingCart size={22}  onClick={() => router.push("/cart")} />
                  </BadgeIcon>
               </IconsTray>
               
               <div className="absolute lg:hidden right-6 active-shrink">
                  <FiMenu size={20} onClick={() => setIsDrawerOpen(true)} />
               </div>
            </div>
         </nav>
      </>
   )
}

export default Navbar