import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Header from 'components/Header';

const Wrapper = styled.div``;

function IndexPage({ data }) {
  const { logoInMacbook, mobileLogo, piggy } = data;
  return (
    <Wrapper>
      <Header
        logoInMacbook={logoInMacbook.sizes}
        mobileLogo={mobileLogo.sizes}
        piggy={piggy.sizes}
      />
    </Wrapper>
  );
}

export const query = graphql`
  query IndexQuery {
    mobileLogo: imageSharp(id: { regex: "/mobileLogo.png/" }) {
      sizes(maxWidth: 152) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
        tracedSVG
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

export default IndexPage;
