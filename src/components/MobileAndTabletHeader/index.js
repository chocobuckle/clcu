import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { greenBackground } from 'sharedStyles';

const Wrapper = styled.div`
  background: ${greenBackground};
`;

const MobileAndTabletLogo = styled(Img)`
  width: 40.5%;
  max-width: 312px;
  margin: 0 auto;
`;

const TaglineH1 = styled.h1`
  ${'' /* color: #fff; */}
  text-transform: uppercase;
  text-align: center;
`;

const TaglineH2 = styled.h2`
  ${'' /* color: #fff; */}
  text-transform: uppercase;
  text-align: center;
`;

const TaglineH3 = styled.h3`
  ${'' /* color: #fff; */}
  text-transform: uppercase;
  text-align: center;
`;

const TaglineH4 = styled.h4`
  ${'' /* color: #fff; */}
  text-transform: uppercase;
  text-align: center;
`;

const TaglineP = styled.p`
  ${'' /* color: #fff; */}
  text-transform: uppercase;
  text-align: center;
`;

function MobileAndTabletHeader({ mobileAndTabletLogoSizes }) {
  return (
    <Wrapper>
      <MobileAndTabletLogo sizes={mobileAndTabletLogoSizes} />
      <TaglineH1>Original Creative Campaigns</TaglineH1>
      <TaglineH2>Original Creative Campaigns</TaglineH2>
      <TaglineH3>Original Creative Campaigns</TaglineH3>
      <TaglineH4>Original Creative Campaigns</TaglineH4>
      <TaglineP>Original Creative Campaigns</TaglineP>
    </Wrapper>
  );
}

export default MobileAndTabletHeader;
