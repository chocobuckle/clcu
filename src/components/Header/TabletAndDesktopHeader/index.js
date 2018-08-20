import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { backgroundGrey, desktop } from 'sharedStyles';

const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 82.7%,
    ${backgroundGrey} 82.7%,
    rgba(255, 255, 255, 1) 100%
  );
  padding: 9.25% 0 3.125%;
  width: 100%;
`;

const TabletAndDesktopImg = styled(Img)`
  width: 70.5%;
  margin: 0 auto -16.3vw;

  @media screen and (min-width: ${desktop}) {
    margin: 0 auto -162.674px;
  }
`;

const piggyImgStyle = {
  position: 'relative',
  width: '16%',
  bottom: '35%',
  left: '-3%',
  maxWidth: '159.36px'
};

function TabletAndDesktopHeader({ tabletAndDesktopLogoSizes, piggySizes }) {
  return (
    <Wrapper>
      <TabletAndDesktopImg sizes={tabletAndDesktopLogoSizes} />
      <Img sizes={piggySizes} style={{ ...piggyImgStyle }} />
    </Wrapper>
  );
}

export default TabletAndDesktopHeader;
