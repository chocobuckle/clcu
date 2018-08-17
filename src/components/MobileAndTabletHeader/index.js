import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { greenBackground } from 'sharedStyles';

const Wrapper = styled.div`
  background: ${greenBackground};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 4vw 0 3.9vw;
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
  margin-top: 3vw;
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
