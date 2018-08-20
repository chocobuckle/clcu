import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { backgroundGrey } from 'sharedStyles';

const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 83.75%,
    ${backgroundGrey} 83.75%,
    rgba(255, 255, 255, 1) 100%
  );
  padding: 12.5% 0 3.125%;
`;

const TabletAndDesktopImg = styled(Img)`
  width: 70.5%;
  margin: 0 auto;
`;

function TabletAndDesktopHeader({ tabletAndDesktopLogoSizes, piggySizes }) {
  return (
    <Wrapper>
      <TabletAndDesktopImg sizes={tabletAndDesktopLogoSizes} />
    </Wrapper>
  );
}

export default TabletAndDesktopHeader;
