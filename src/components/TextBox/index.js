import React from 'react';
import styled from 'styled-components';
import { green, darkGrey, lightGrey } from 'sharedStyles';

const Wrapper = styled.div`
  background: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
`;

const LightGreyBox = styled.div`
  background: ${lightGrey};
  box-shadow: 0.639em 0.639em 1.688em rgba(35, 31, 32, 0.25);
  margin: 0 auto;
  padding: 3.5% 5%;
  position: relative;
  top: 5.5vw;
  width: 71%;
`;

const Header = styled.h2`
  color: ${({ fontColor }) => fontColor};
  letter-spacing: 0.04em;
  text-align: center;
  text-transform: uppercase;
`;

const Text = styled.p`
  margin-bottom: 25%;
  margin-top: 5%;
  text-align: center;
`;

function Textbox({ backgroundColor, headerFirstLineText, headerSecondLineText, textContent }) {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <LightGreyBox>
        <Header fontColor={darkGrey}>{headerFirstLineText}</Header>
        <Header fontColor={green}>{headerSecondLineText}</Header>
        <Text>{textContent}</Text>
      </LightGreyBox>
    </Wrapper>
  );
}

export default Textbox;
