import React from 'react';
import styled from 'styled-components';
import { green, darkGrey, lightGrey } from 'sharedStyles';

const GreenBox = styled.div`
  background: ${({ backgroundColor }) => backgroundColor};
  position: relative;
  height: 275px;
`;

const LightGreyBox = styled.div`
  background: ${lightGrey};
  box-shadow: 0.639em 0.639em 1.688em rgba(35, 31, 32, 0.25);
  padding: 0.75em 2em 0;
  margin: 0 auto;
  height: 300px;
  width: 71%;
`;

const Header = styled.h2`
  color: ${({ fontColor }) => fontColor};
  letter-spacing: 0.04em;
  text-align: center;
  text-transform: uppercase;
`;

const Text = styled.p`
  margin-top: 1.5em;
  text-align: center;
`;

function Textbox({ backgroundColor, headerFirstLineText, headerSecondLineText, textContent }) {
  return (
    <GreenBox backgroundColor={backgroundColor}>
      <LightGreyBox>
        <Header fontColor={darkGrey}>{headerFirstLineText}</Header>
        <Header fontColor={green}>{headerSecondLineText}</Header>
        <Text>{textContent}</Text>
      </LightGreyBox>
    </GreenBox>
  );
}

export default Textbox;
