import React, { useContext, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'

import NProgress from 'nprogress';
import Context from './context';
import Reducer from './reducer';
import { 
   SET_LOADING_ON_PAGE_CHANGE,
   SET_CATEGORIES
} from '../types';
import { cartContext } from '../cart';

export default function GlobalState({ children, props: { categories } }) {
   const { onFetchCart } = useContext(cartContext);
   const router = useRouter();

   useEffect(() => {
      routeEvents();
      setCategories(categories);
      onFetchCart();
   }, [])

   function routeEvents() {
      router.events.on('routeChangeStart', () => {
         handleOnChangeLoadingOnPageChange(true);
         NProgress.start();
      })

      router.events.on('routeChangeComplete', () => {
         handleOnChangeLoadingOnPageChange(false);
         NProgress.done();
      });
   } 


   const initialState = {
      loadingOnPageChange: false,
      categories: [],
   }

   
   const [state, dispatch] = useReducer(Reducer, initialState);
   const setDispatch = (type, payload) => dispatch({ type, payload })
   
   // Refactorization of dispatch
   const setLoadingOnPageChangeDispatch = (isLoading = true) => setDispatch(SET_LOADING_ON_PAGE_CHANGE, isLoading); 
   const setCategoriesDispatch = (categories) => setDispatch(SET_CATEGORIES, categories);

   //  Handlers
   const setCategories = (categories) => {
      setCategoriesDispatch(categories);
   }

   const handleOnChangeLoadingOnPageChange = (isLoading) => {
      setLoadingOnPageChangeDispatch(isLoading);
   }


   return (
      <Context.Provider 
         value={{
            categories: state.categories,
            loadingOnPageChange: state.loadingOnPageChange,
            onChangeLoadingOnPageChange: handleOnChangeLoadingOnPageChange
         }}
      >
         {children}
      </Context.Provider>
   )
}
