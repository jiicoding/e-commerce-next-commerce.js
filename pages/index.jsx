import { HeroSection } from '../components/Layouts';
import { HorizontalShowcase } from '../components/Layouts/HorizontalShowcase';
import { fetchLatestProducts } from '../services/products';
import useCategory from '../hooks/useCategory';


export default function Home({ latestProducts }) {
  const { categories } = useCategory()

  return (
    <>
      <HeroSection />
      <HorizontalShowcase label="Categories" items={categories} />
      <HorizontalShowcase label="Latest" items={latestProducts} variant="portrait" />
    </>
  )
}

export const getStaticProps = async () => {
  const { products } = await fetchLatestProducts();

  return {  
    props: {
      latestProducts: products
    }
  }
};

// export const getStaticPaths = async () => ({
//   paths: [{ params: { id: '1' } }],
//   fallback: true,
// });

// export async function getStaticProps(props) {
//   console.log('Index Static: ',{props})

//   return {
//     props: {
//       Props: "asad"
//       // categories,
//       // products
//     }, // will be passed to the page component as props
//   }
// }

// const { categories } = await getCategoriesServices();
  // const { products } = await fetchAllProducts();

  // Assigning suitable images with each category
  // categories = await Promise.all(categories.map(async (category) => {
  //    return { ...category, img: await getImage(category.description) };
  //  }))

// const items = [
//   { id: 1, name: 'Mobiles', img: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/120309-phones-buyer-s-guide-best-smartphones-2020-the-top-mobile-phones-available-to-buy-today-image1-eagx1ykift.jpg' },
//   { id: 2, name: 'Covers', img: 'https://cnet4.cbsistatic.com/img/_jn3M9VQwBMY0AG82BxfLark_sA=/1200x675/2019/09/19/2e76ff3a-538b-4efb-abf4-d11b5a4ac226/iphone-11-cases-group-shot.jpg' },
//   { id: 3, name: 'Cables', img: 'https://lh3.googleusercontent.com/proxy/ByHEd51lpwylDksUp98BwynmAVjB3Ey73pTys3XWQ22VvnOSmTQvHdQQSs31ftASvg138VhE7aJUj3rh1opePXe5oYfQHF-dmwg5lKksb1hr7GDAyNKfIA' },
//   { id: 4, name: 'Chargers', img: 'https://p.globalsources.com/IMAGES/PDT/BIG/731/B1060196731.jpg' },
//   { id: 5, name: 'Headphones', img: 'https://static-01.daraz.pk/p/b35a50a5cbdb0fcc8ee5564dec5d5ffb.jpg' },
// ];

// const products = [
//   { id: 1, name: 'Apple', price: 'Rs. 2,000 PKR', img: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/120309-phones-buyer-s-guide-best-smartphones-2020-the-top-mobile-phones-available-to-buy-today-image1-eagx1ykift.jpg' },
//   { id: 2, name: 'Banana', price: 'Rs. 3,000 PKR', img: 'https://cnet4.cbsistatic.com/img/_jn3M9VQwBMY0AG82BxfLark_sA=/1200x675/2019/09/19/2e76ff3a-538b-4efb-abf4-d11b5a4ac226/iphone-11-cases-group-shot.jpg' },
//   { id: 3, name: 'Orange', price:  'Rs. 1,200 PKR', img: 'https://lh3.googleusercontent.com/proxy/ByHEd51lpwylDksUp98BwynmAVjB3Ey73pTys3XWQ22VvnOSmTQvHdQQSs31ftASvg138VhE7aJUj3rh1opePXe5oYfQHF-dmwg5lKksb1hr7GDAyNKfIA' },
//   // { id: 4, name: 'Chargers', img: 'https://p.globalsources.com/IMAGES/PDT/BIG/731/B1060196731.jpg' },
//   // { id: 5, name: 'Headphones', img: 'https://static-01.daraz.pk/p/b35a50a5cbdb0fcc8ee5564dec5d5ffb.jpg' },
// ];