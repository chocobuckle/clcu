import React from 'react';
import styled from 'styled-components';
import { MobileAndTabletHeader, TextBoxAndImgBoxContainer, DesktopHeader } from 'components';
import { green, darkGrey } from 'sharedStyles';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 996px;
`;

const HR = styled.hr`
  border: 0;
  border-top: 0.063em solid rgb(208, 210, 211);
  margin: 0;
`;

function IndexPage({ data }) {
  const {
    logoInMacbook,
    mobileAndSupermarket,
    mobileAndTabletLogo,
    peopleOfClane,
    piggy,
    tearOfJoy,
    tearOfJoyMac
  } = data;
  return (
    <Wrapper>
      <MobileAndTabletHeader mobileAndTabletLogoSizes={mobileAndTabletLogo.sizes} />
      {/* <DesktopHeader logoInMacbookSizes={logoInMacbook.sizes} piggySizes={piggy.sizes} /> */}
      <HR />
      <TextBoxAndImgBoxContainer
        backgroundColor={green}
        headerFirstLineText="What was"
        headerSecondLineText="the campaign?"
        imageSizes={tearOfJoy.sizes}
        mobileAndDesktopImageWidth="81vw"
        textContent="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et."
      />
      <HR style={{ marginTop: '-4vw' }} />
      <TextBoxAndImgBoxContainer
        backgroundColor={darkGrey}
        headerFirstLineText="What was the"
        headerSecondLineText="creative brief?"
        imageSizes={peopleOfClane.sizes}
        mobileAndDesktopImageWidth="100vw"
        textContent="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et."
      />
      <HR />
      <TextBoxAndImgBoxContainer
        backgroundColor={green}
        headerFirstLineText="What was the"
        headerSecondLineText="creative concept?"
        imageSizes={tearOfJoyMac.sizes}
        mobileAndDesktopImageWidth="81vw"
        textContent="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et."
      />
      <HR />
      <TextBoxAndImgBoxContainer
        backgroundColor={darkGrey}
        headerFirstLineText="How did"
        headerSecondLineText="it go?"
        imageSizes={mobileAndSupermarket.sizes}
        mobileAndDesktopImageWidth="100vw"
        textContent="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et."
      />
      <HR style={{ marginBottom: '4vw'}} />
    </Wrapper>
  );
}

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    mobileAndTabletLogo: imageSharp(id: { regex: "/mobile_and_tablet_logo.png/" }) {
      sizes(maxWidth: 311) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    desktopLogo: imageSharp(id: { regex: "/desktop_logo_in_macbook.png/" }) {
      sizes(maxWidth: 622) {
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
    tearOfJoy: imageSharp(id: { regex: "/tear_of_joy.jpg/" }) {
      sizes(maxWidth: 622) {
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
      sizes(maxWidth: 767) {
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
      sizes(maxWidth: 622) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
        tracedSVG
      }
    }
    mobileAndSupermarket: imageSharp(id: { regex: "/mobile_and_supermarket.png/" }) {
      sizes(maxWidth: 767) {
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
