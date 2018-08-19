import React from 'react';
import styled from 'styled-components';
import { green, darkGrey, lightGrey, tablet } from 'sharedStyles';

const GreenBox = styled.div`
  background: ${({ backgroundColor }) => backgroundColor};
  height: 275px;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    height: 380px;
    width: 50%;
  }
`;

const LightGreyBox = styled.div`
  background: ${lightGrey};
  box-shadow: 0.639em 0.639em 1.688em rgba(35, 31, 32, 0.25);
  height: 300px;
  margin: 0 auto;
  padding: 2.65% 6.25% 0;
  position: relative;
  text-align: center;
  top: 18.61px;
  width: 80%;

  @media screen and (min-width: ${tablet}) {
    padding: 3.9% 6.25% 0;
    height: 400px;
    text-align: left;
    top: 23px;
  }
`;

const Header = styled.h2`
  color: ${({ fontColor }) => fontColor};
  letter-spacing: 0.04em;
  line-height: 1.24em;
  text-transform: uppercase;
`;

const Text = styled.p`
  margin-top: 0.8em;

  @media screen and (min-width: ${tablet}) {
    margin-top: 1.2em;
  }
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
