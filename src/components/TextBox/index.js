import React from 'react';
import styled from 'styled-components';
import { green, darkGrey, lightGrey, tablet } from 'sharedStyles';

const GreenBox = styled.div`
  background: ${({ backgroundColor }) => backgroundColor};
  height: 275px;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    height: 37vw;
    width: 50%;
  }
`;

const LightGreyBox = styled.div`
  background: ${lightGrey};
  box-shadow: 0.639em 0.639em 1.688em rgba(35, 31, 32, 0.25);
  padding-top: 1em;
  margin: 0 auto;
  position: relative;
  top: 18.61px;
  height: 300px;
  width: 80%;

  @media screen and (min-width: ${tablet}) {
    height: 40vw;
  }
`;

const Header = styled.h2`
  color: ${({ fontColor }) => fontColor};
  letter-spacing: 0.04em;
  line-height: 1.24em;
  text-align: center;
  text-transform: uppercase;
`;

const Text = styled.p`
  margin: 1.2em 2.21em 0;
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
