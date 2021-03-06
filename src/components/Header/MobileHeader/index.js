import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { green } from 'sharedStyles';

const Wrapper = styled.div`
  background: ${green};
  padding: 4vw 0;
  margin-bottom: 4vw;
`;

const MobileLogo = styled(Img)`
  width: 40.5%;
  max-width: 312px;
  margin: 0 auto;
`;

const Tagline = styled.h3`
  color: #fff;
  font-size: 4.75vw;
  letter-spacing: 0.035em;
  margin-top: 3vw;
  text-transform: uppercase;
  text-align: center;
`;

function MobileHeader({ mobileLogoSizes }) {
  return (
    <Wrapper>
      <MobileLogo sizes={mobileLogoSizes} />
      <Tagline>Original Creative Campaigns</Tagline>
    </Wrapper>
  );
}

export default MobileHeader;
