import React from 'react';
import styled from 'styled-components';
import { TextBox, ImgBox } from 'components';
import { tablet, desktop } from 'sharedStyles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4vw 0;

  @media screen and (min-width: ${tablet}) {
    flex-direction: ${({ swapOrder }) => {
      return swapOrder ? 'row-reverse' : 'row';
    }};
  }

  @media screen and (min-width: ${desktop}) {
    padding: 39.84px 0;
  }
`;

function TextBoxAndImgBoxContainer({
  backgroundColor,
  gatsbyImgWrapperStyle,
  headerFirstLineText,
  headerSecondLineText,
  imageSizes,
  swapOrder,
  textContent,
  uniqueStyle
}) {
  return (
    <Wrapper
      swapOrder={swapOrder}>
      <TextBox
        backgroundColor={backgroundColor}
        headerFirstLineText={headerFirstLineText}
        headerSecondLineText={headerSecondLineText}
        textContent={textContent}
      />
      <ImgBox
        gatsbyImgWrapperStyle={gatsbyImgWrapperStyle}
        imageSizes={imageSizes}
        uniqueStyle={uniqueStyle}
      />
    </Wrapper>
  );
}

export default TextBoxAndImgBoxContainer;
