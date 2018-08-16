import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { greenBackground } from 'sharedStyles';

const Wrapper = styled.div`
  background: ${greenBackground};
  text-align: center;
  width: 100%;
`;

const MobileLogo = styled(Img)`
  width: 40%;
`;

function MobileHeader({ mobileLogo }) {
  return (
    <Wrapper>
      <MobileLogo sizes={mobileLogo} />
    </Wrapper>
  );
}

export default MobileHeader;
