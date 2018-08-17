import React from 'react';
import styled from 'styled-components';
import { TextBox, ImgBox } from 'components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8vw 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

function TextBoxAndImgBoxContainer({ headerFirstLineText, headerSecondLineText, image, textContent }) {
  return (
    <Wrapper>
      <TextBox
        headerFirstLineText={headerFirstLineText}
        headerSecondLineText={headerSecondLineText}
        textContent={textContent}
      />
    </Wrapper>
  );
}

export default TextBoxAndImgBoxContainer;
