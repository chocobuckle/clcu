import React from 'react';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 83px;
`;

const Img = styled(GatsbyImage)`
  width: ${({ mobileAndDesktopImageWidth }) => mobileAndDesktopImageWidth};
`;

function ImgBox({ imageSizes, mobileAndDesktopImageWidth }) {
  return (
    <Wrapper>
      <Img sizes={imageSizes} mobileAndDesktopImageWidth={mobileAndDesktopImageWidth} />
    </Wrapper>
  );
}

export default ImgBox;
