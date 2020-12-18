import React from 'react';
import Link from 'next/link'

export default function contact() {
   return (
      <div>
         <h1>Contact Us</h1>
         <Link href="/">
            <a className="underline">Home</a>
         </Link>
      </div>
   )
}
