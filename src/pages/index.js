import React from 'react';
import styled from 'styled-components';
import { MobileAndTabletHeader, DesktopHeader } from 'components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 996px;
`;

function IndexPage({ data }) {
  const { logoInMacbook, mobileAndTabletLogo, piggy } = data;
  return (
    <Wrapper>
      <MobileAndTabletHeader mobileAndTabletLogoSizes={mobileAndTabletLogo.sizes} />
      {/* <DesktopHeader logoInMacbookSizes={logoInMacbook.sizes} piggySizes={piggy.sizes} /> */}
    </Wrapper>
  );
}

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    mobileAndTabletLogo: imageSharp(id: { regex: "/mobileAndTabletLogo.png/" }) {
      sizes(maxWidth: 312) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    logoInMacbook: imageSharp(id: { regex: "/logo_in_macbook.png/" }) {
      sizes(maxWidth: 710) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
        tracedSVG
      }
    }
    peopleOfClane: imageSharp(id: { regex: "/people_of_clane.jpg/" }) {
      sizes(maxWidth: 500) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
        tracedSVG
      }
    }
    piggy: imageSharp(id: { regex: "/piggy.png/" }) {
      sizes(maxWidth: 165) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
        tracedSVG
      }
    }
    mobile: imageSharp(id: { regex: "/mobile.jpg/" }) {
      sizes(maxWidth: 220) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
        tracedSVG
      }
    }
    supermarket: imageSharp(id: { regex: "/supermarket.jpg/" }) {
      sizes(maxWidth: 229) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
        tracedSVG
      }
    }
    mobileAndSupermarket: imageSharp(id: { regex: "/mobile_and_supermarket.jpg/" }) {
      sizes(maxWidth: 497) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
        tracedSVG
      }
    }
    tearOfJoy: imageSharp(id: { regex: "/tear_of_joy.jpg/" }) {
      sizes(maxWidth: 422) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
        tracedSVG
      }
    }
    tearOfJoyMac: imageSharp(id: { regex: "/tear_of_joy_mac.jpg/" }) {
      sizes(maxWidth: 395) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
        tracedSVG
      }
    }
  }
`;
