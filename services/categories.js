import {commerce} from '../lib/commerce';
import { getImage } from './images';


export async function getCategoriesServices() {
   try {
      const { data: categories } = await commerce.categories.list();
      
      //Assigning suitable images with each category
      const categoriesWithImage = await Promise.all(categories.map(async (category) => {
         return { ...category, img: await getImage(category.description) };
      }))

      return { categories: categoriesWithImage };
   } catch (err) {
      console.log({ error: err });
      return { error: err.message };
   }
}