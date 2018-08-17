import React from 'react';
import styled from 'styled-components';
import { green, darkGrey, lightGrey } from 'sharedStyles';

const Wrapper = styled.div`
  background: ${green};
  width: 100%;
`;

const LightGreyBox = styled.div`
  background: ${lightGrey};
  width: 71%;
  margin: 0 auto;
  padding: 3.5% 5%;
`;

const Header = styled.h2`
  color: ${({ fontColor }) => fontColor};
  letter-spacing: 0.04em;
  text-align: center;
  text-transform: uppercase;
`;

const Text = styled.p`
  text-align: center;
  margin-top: 7%;
`;

function Textbox({ headerFirstLineText, headerSecondLineText, textContent }) {
  return (
    <Wrapper>
      <LightGreyBox>
        <Header fontColor={darkGrey}>{headerFirstLineText}</Header>
        <Header fontColor={green}>{headerSecondLineText}</Header>
        <Text>{textContent}</Text>
      </LightGreyBox>
    </Wrapper>
  );
}

export default Textbox;
