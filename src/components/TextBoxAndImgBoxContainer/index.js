import React from 'react';
import styled from 'styled-components';
import { TextBox, ImgBox } from 'components';
import { tablet } from 'sharedStyles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4vw 0;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
  }
`;

function TextBoxAndImgBoxContainer({
  backgroundColor,
  tabletImageWidth,
  headerFirstLineText,
  headerSecondLineText,
  imageSizes,
  mobileImageWidth,
  textContent,
  uniqueStyle
}) {
  return (
    <Wrapper>
      <TextBox
        backgroundColor={backgroundColor}
        headerFirstLineText={headerFirstLineText}
        headerSecondLineText={headerSecondLineText}
        textContent={textContent}
      />
      <ImgBox
        imageSizes={imageSizes}
        tabletImageWidth={tabletImageWidth}
        mobileImageWidth={mobileImageWidth}
        uniqueStyle={uniqueStyle}
      />
    </Wrapper>
  );
}

export default TextBoxAndImgBoxContainer;
