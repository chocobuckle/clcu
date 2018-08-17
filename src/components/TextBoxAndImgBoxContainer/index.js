import React from 'react';
import styled from 'styled-components';
import { TextBox, ImgBox } from 'components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4vw 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

function TextBoxAndImgBoxContainer({
  backgroundColor,
  headerFirstLineText,
  headerSecondLineText,
  imageSizes,
  mobileAndDesktopImageWidth,
  textContent
}) {
  return (
    <Wrapper>
      <TextBox
        backgroundColor={backgroundColor}
        headerFirstLineText={headerFirstLineText}
        headerSecondLineText={headerSecondLineText}
        textContent={textContent}
      />
      <ImgBox imageSizes={imageSizes} mobileAndDesktopImageWidth={mobileAndDesktopImageWidth} />
    </Wrapper>
  );
}

export default TextBoxAndImgBoxContainer;
