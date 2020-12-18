import React from 'react'

export default function About({ phone }) {
   return (
      <div>
         <h1>About Us</h1>
         <p>Contact: {phone}</p>
      </div>
   )
}

export async function getStaticProps() {
   return {
      props: {
         phone: "0300-6367889"
      }
   }
}