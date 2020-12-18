import { commerce } from '../lib/commerce';

export async function addItemServices(id, quantity) {
   try {
      const cart = await commerce.cart.add(id, quantity);

      return { cart };
   } catch (err) {
      console.log({ err });
      return { error: err.message }
   }
}

export async function fetchCartServices() {
   try {
      const cart = await commerce.cart.retrieve();
      
      return { cart };
   } catch (err) {
      console.log({ err });
      return { error: err.message };
   }
}

export async function updateCartServices(id, body) {
   try {
      const cart = await commerce.cart.update(id, body);

      return { cart };
   } catch (err) {
      console.log({ err: err });
      return { error: err.message };
   }
}

export async function clearCartServices() {
   try {
      const cart = await commerce.cart.empty();

      return { cart };
   } catch (err) {
      console.log({ error: err });
      return { error: err.message }
   }
}