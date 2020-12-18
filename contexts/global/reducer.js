import { 
   SET_CATEGORIES,
   SET_LOADING_ON_PAGE_CHANGE 
 } from '../types'

const reducer = (state, { type, payload }) => {
   if (type === SET_LOADING_ON_PAGE_CHANGE) return { ...state, loadingOnPageChange: payload };

   if (type === SET_CATEGORIES) return { ...state, categories: payload }

   return state;
}

export default reducer
