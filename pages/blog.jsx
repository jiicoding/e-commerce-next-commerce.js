import React from 'react'

export default function blog({ total }) {
   return (
      <div>
         <h1>Blog</h1>
         <p>Total Blogs {total}</p>
      </div>
   )
}

export async function getStaticProps() {
   return {
      props: {
         total: 2
      }
   }
}
