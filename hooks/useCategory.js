import { useContext } from 'react';

import { globalContext } from '../contexts/global';

export default function useCategory() {
   const { categories } = useContext(globalContext);

   return { categories };
}
