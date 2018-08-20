import React from 'react';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import { tablet, desktop } from 'sharedStyles';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 83px;

  @media screen and (min-width: ${tablet}) {
    padding-top: 0;
    width: 50vw;
  }

  @media screen and (min-width: ${desktop}) {
    width: 498px;
  }
`;

const Img = styled(GatsbyImage)`
  position: relative;
`;

function ImgBox({
  gatsbyImgWrapperStyle,
  imageSizes,
  uniqueStyle
}) {
  return (
    <Wrapper>
      <Img
        imgStyle={{ ...gatsbyImgWrapperStyle }}
        sizes={imageSizes}
        style={{ ...uniqueStyle }}
      />
    </Wrapper>
  );
}

export default ImgBox;
