import React from 'react';
import styled from 'styled-components';
import { greenBackground } from 'sharedStyles';

const Wrapper = styled.div`
  background: red;
`;

function Textbox() {
  return (
    <Wrapper>
      Textbox
    </Wrapper>
  );
}

export default Textbox;
