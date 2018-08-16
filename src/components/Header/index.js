import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const MobileHeader = styled.div`
  display: block;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;
const DesktopHeader = styled.div`
  display: none;

  @media screen and (min-width: 600px) {
    display: block;
  }
`;

function Header({ mobileLogo, logoInMacbook, piggy }) {
  return (
    <div>
     <MobileHeader mobileLogo={mobileLogo} />
     <DesktopHeader logoInMacbook={logoInMacbook} piggy={piggy} />
    </div>
  );
}

export default Header;
