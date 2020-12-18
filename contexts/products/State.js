import React, { useReducer } from 'react'

import Context from './context';
import Reducer from './reducer';
import { SET_PRODUCTS, SET_LOADING, SET_TOAST, SET_LATEST_PRODUCTS } from '../types';

export default function ProductState({ children }) {
   const initialState = {
      products: [],
      loading: false,
      isToast: false,
      toast: '',
      latestProducts: [],
   }

   // reducers helpers
   const [state, dispatch] = useReducer(Reducer, initialState);
   const setDispatch = (type, payload) => dispatch({ type, payload })


   //factorixations using "setDispatch" method
   const setLoadingDispatch = (isLoading = true) => setDispatch(SET_LOADING, isLoading);
   const setProductsDispatch = (products) => setDispatch(SET_PRODUCTS, products); 
   const setToastDispatch = (isToast, toast) => setDispatch(SET_TOAST, { isToast, toast }); 

   // Handlers
   const handleFetchProducts = async (products) => {
      setProductsDispatch(products);  
   }

   const handleSetToast = (isToast, toast) => {
      setToastDispatch(isToast, toast);
   }

   return (
      <Context.Provider
         value={{
            loading: state.loading,
            isToast: state.isToast,
            toast: state.toast,
            products: state.products,
            latestProducts: state.latestProducts,
            onSetToast: handleSetToast,
            onFetchProducts: handleFetchProducts,
         }}
      >
         {children}
      </Context.Provider>
   )
}
