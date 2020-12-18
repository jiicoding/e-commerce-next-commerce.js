import { commerce } from '../lib/commerce';

export async function fetchAllProducts(option) {

   try {
      let res;

      if (option) res = await commerce.products.list(option);
      else res = await commerce.products.list();

      const products = res.data;
      products.reverse();
   
      return { products, meta: res.meta };
   } catch (err) {
      console.log({ err })
      return { error: err.message };
   }
}

export async function fetchLatestProducts(option = { limit: 3 }) {
   const { limit } = option;
 
   try {
      let { data: products } = await commerce.products.list();
      
      products.reverse();
      products = products.slice(0, limit)

      return { products }
   } catch (err) {
      console.log({ error: err })
      return { error: err }
   }
}