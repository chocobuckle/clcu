import React from 'react';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import { tablet } from 'sharedStyles';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 83px;

  @media screen and (min-width: ${tablet}) {
    padding-top: 0;
    width: 50vw;
  }
`;

const Img = styled(GatsbyImage)`
  position: relative;
  width: ${({ mobileImageWidth }) => mobileImageWidth};

  @media screen and (min-width: ${tablet}) {
    width: ${({ tabletImageWidth }) => tabletImageWidth};
  }
`;

function ImgBox({
  gatsbyImgWrapperStyle,
  imageSizes,
  mobileImageWidth,
  tabletImageWidth,
  uniqueStyle
}) {
  return (
    <Wrapper>
      <Img
        imgStyle={{ ...gatsbyImgWrapperStyle }}
        sizes={imageSizes}
        mobileImageWidth={mobileImageWidth}
        tabletImageWidth={tabletImageWidth}
        style={{ ...uniqueStyle }}
      />
    </Wrapper>
  );
}

export default ImgBox;
