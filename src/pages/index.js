import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => (
  <div>
    <h1>Testing</h1>
    <p>Now go build something great.</p>
    <Img sizes={data.logoInMac.sizes} style={{ width: '200px' }}/>
  </div>
);

export const query = graphql`
  query IndexQuery {
    logoInMac: imageSharp(id: { regex: "/logo_in_mac.png/" }) {
      sizes(maxWidth: 759) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
        tracedSVG
      }
    }
    mobileLogo: imageSharp(id: { regex: "/mobile_logo.png" }) {
      sizes(maxWidth: 300) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
        tracedSVG
      }
    }
    mobile: imageSharp(id: { regex: "/mobile.jpg" }) {
      sizes(maxWidth: 300) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
        tracedSVG
      }
    }
    peopleOfClane: imageSharp(id: { regex: "/people_of_clane.jpg" }) {
      sizes(maxWidth: 300) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
        tracedSVG
      }
    }
    piggy: imageSharp(id: { regex: "/piggy.png" }) {
      sizes(maxWidth: 300) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
        tracedSVG
      }
    }
    supermarketAd: imageSharp(id: { regex: "/supermarket_ad.jpg" }) {
      sizes(maxWidth: 300) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
        tracedSVG
      }
    }
    tearOfJoyMac: imageSharp(id: { regex: "/tear_of_joy_mac.jpg" }) {
      sizes(maxWidth: 300) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
        tracedSVG
      }
    }
    tearOfJoy: imageSharp(id: { regex: "/tear_of_joy.jpg" }) {
      sizes(maxWidth: 300) {
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
