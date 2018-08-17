import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { greenBackground } from 'sharedStyles';

const Wrapper = styled.div`
  background: ${greenBackground};
`;

const MobileAndTabletLogo = styled(Img)`
  width: 40.5%;
  max-width: 312px;
  margin: 0 auto;
`;

const Tagline = styled.h3`
  color: #fff;
  font-size: 4.5vw;
  letter-spacing : 0.035em;
  text-transform: uppercase;
  text-align: center;
`;

function MobileAndTabletHeader({ mobileAndTabletLogoSizes }) {
  return (
    <Wrapper>
      <MobileAndTabletLogo sizes={mobileAndTabletLogoSizes} />
      <Tagline>Original Creative Campaigns</Tagline>
    </Wrapper>
  );
}

export default MobileAndTabletHeader;
