import React, { useReducer } from 'react';

import Context from './context';
import Reducer from './Reducer';
import { 
   SET_TOAST,
   SET_LOADING, 
   SET_CART_ITEMS, 
   SET_CART_TOTAL, 
   SET_LOADING_ON_UPDATE,
   SET_CART_COUNT_ITEMS,
   SET_LOADING_ON_CLEAR_CART,
   SET_LOADING_ON_CHECKOUT_CART,
} from '../types'
import { 
   fetchCartServices, 
   updateCartServices, 
   addItemServices,
   clearCartServices
} from '../../services/cart';


const CartState = ({ children }) => {
   const initialState = {
      items: [],
      updatedItems: [],
      total: {},
      itemsCount: null,
      loading: false,
      isToast: false,
      toast: '',
      loadingOnUpdate: false,
      loadingOnClearCart: false,
      loadingOnCheckoutCart: false,
   }

   const [state, dispatch] = useReducer(Reducer, initialState);
   const setDispatch = (type, payload) => dispatch({ type, payload })

   // Refactorization of dispatch
   const setItemsDispatch = (items) => setDispatch(SET_CART_ITEMS, items); 
   const setTotalDispatch = (total) => setDispatch(SET_CART_TOTAL, total);
   const setCounItemsDispatch = (itemsCount) => setDispatch(SET_CART_COUNT_ITEMS, itemsCount);
   const setToastDispatch = (isToast, toast) => setDispatch(SET_TOAST, { isToast, toast });
   const setLoadingDispatch = (isLoading = true) => setDispatch(SET_LOADING, isLoading);
   const setLoadingOnUpdateDispatch = (isLoading = true) => setDispatch(SET_LOADING_ON_UPDATE, isLoading);
   const setLoadingOnClearCartDispatch = (isLoading = true) => setDispatch(SET_LOADING_ON_CLEAR_CART, isLoading);
   const setLoadingOnCheckoutCartDispatch = (isLoading = true) => setDispatch(SET_LOADING_ON_CHECKOUT_CART, isLoading);

   // Handlers
   const handleFetchCart = async () => {
      setLoadingDispatch();

      const { cart, error } = await fetchCartServices();

      if (error) {
         setLoadingDispatch(false);
         setToastDispatch(true, "Something went wrong while fetching card!")
      }

      const { subtotal, line_items: items, total_unique_items: itemsCount } = cart;

      setCounItemsDispatch(itemsCount);
      setItemsDispatch(items);
      setTotalDispatch(subtotal);
      setLoadingDispatch(false);
      
      if (itemsCount < 1) setToastDispatch(true, "Cart is emptyyyy!");
   }

   const handleUpdateCart = async (id, body) => {
      setLoadingOnUpdateDispatch();

      const { cart: updatedCart, error } = await updateCartServices(id, body);

      if (error) {
         setLoadingOnUpdateDispatch(false);
         setToastDispatch(true, 'Something really went wrong!');
         
         return { cart: null };
      };

      const { cart: { line_items: items, subtotal, total_unique_items: itemsCount } } = updatedCart;

      setItemsDispatch(items);
      setTotalDispatch(subtotal);
      setLoadingOnUpdateDispatch(false);
      setCounItemsDispatch(itemsCount);

      if (itemsCount === 0) setToastDispatch(true, "Cart is empty after updating!"); 
      
      return { cart: updatedCart }
   }

   const handleSetToast = async (isToast, toast) => {
      setToastDispatch(isToast, toast);
   }

   // Not completed yet bcz error is not handled
   const handleAddItemCart = async (id, quantity) => {
      const { cart, error } = await addItemServices(id, quantity);

      const { cart: { subtotal, line_items: items, total_unique_items: itemsCount } } = cart;

      setCounItemsDispatch(itemsCount);
      setItemsDispatch(items);
      setTotalDispatch(subtotal);

      if (itemsCount > 0) setToastDispatch(false, "");
   }


   // Not completed yet bcz error is not handled
   const handleClearCart = async () => {
      setLoadingOnClearCartDispatch();

      const { cart, error } = await clearCartServices();

      const { cart: { line_items: items, subtotal, total_unique_items: itemsCount } } = cart;

      setItemsDispatch(items);
      setTotalDispatch(subtotal);
      setCounItemsDispatch(itemsCount);
      setLoadingOnClearCartDispatch(false);

      if (itemsCount === 0) setToastDispatch(true, 'No item is left behind!')
   } 

   const handleOnIsCartEmpty = () => {
      setLoadingDispatch();

      if (state.itemsCount === null) return false;

      if (state.itemsCount > 0) {
         setLoadingDispatch(false);
         return false;
      };

      if (state.itemsCount === 0) setToastDispatch(true, "Cart is Emptyyyy!");
      setLoadingDispatch(false);
   }

   return (
      <Context.Provider
         value={{
            loading: state.loading,
            loadingOnUpdate: state.loadingOnUpdate,
            loadingOnClearCart: state.loadingOnClearCart,
            loadingOnCheckoutCart: state.loadingOnCheckoutCart,
            loadingOnAddToCart: state.loadingOnAddToCart,
            toast: state.toast,
            isToast: state.isToast,
            cartItems: state.items,
            cartTotal: state.total,
            itemsCount: state.itemsCount,
            onSetToast: handleSetToast,
            onClearCart: handleClearCart,
            onFetchCart: handleFetchCart,
            onUpdateCart: handleUpdateCart,
            onAddItemToCart: handleAddItemCart,
            onIsCartEmpty: handleOnIsCartEmpty,
         }}
      >
         {children}
      </Context.Provider>
   ) 
};

export default CartState