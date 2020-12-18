import "../styles/global.css"

import _ from 'lodash'
import { Navbar } from '../components/Navbar/index'
import { CartState } from '../contexts/cart';
import { ProductState } from '../contexts/products';
import { GlobalState } from '../contexts/global';
import { getCategoriesServices } from '../services/categories';

function MyApp({ Component, pageProps, appProps }) {
  return (
    <>
      <ProductState>
        <CartState>
          <GlobalState props={appProps}>
            <Navbar />
            <Component { ...appProps } {...pageProps} />
          </GlobalState>
        </CartState>
      </ProductState>
    </>
  )
}

MyApp.getInitialProps = async () => {
  const { categories } = await getCategoriesServices();

  return {
    appProps: {
      categories,
    }
  }
}

export default MyApp
