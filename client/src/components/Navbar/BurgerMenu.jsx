import React from 'react';
import { Wrapper } from './BurgerMenu.styles';

export const Burgermenu = React.memo(({navbarState,handleNavbar}) => {
  return (
    <Wrapper onClick={handleNavbar}>
      <div className={ navbarState ? "open" : "" }>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
})

export default Burgermenu;
