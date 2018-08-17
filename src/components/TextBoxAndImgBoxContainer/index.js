import React from 'react';
import styled from 'styled-components';
import { TextBox, ImgBox } from 'components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

function TextBoxAndImgBoxContainer() {
  return (
    <Wrapper>
      <TextBox />
    </Wrapper>
  );
}

export default TextBoxAndImgBoxContainer;
