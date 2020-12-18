import { SET_PRODUCTS, SET_LOADING, SET_TOAST, SET_LATEST_PRODUCTS } from '../types';

const reducer = (state, { type, payload }) => {
   if (type === SET_PRODUCTS) return { ...state, products: payload };
   
   if (type === SET_LATEST_PRODUCTS) return { ...state, latestProducts: payload };

   if (type === SET_LOADING) return { ...state, loading: payload };

   if (type === SET_TOAST) return { ...state, isToast: payload.isToast, toast: payload.toast }

   return state;
}

export default reducer;