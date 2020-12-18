import React from 'react'

import Wrapper from './Wrapper';
import Scroll from './Scroll';
import Items from './Items';

export default function Main({ label, items, variant }) {
   return (
      <Wrapper label={label}>
        <Scroll>
          <Items items={items} variant={variant} />
        </Scroll>
      </Wrapper>
   )
}
