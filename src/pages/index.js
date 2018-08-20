import React, { Component } from 'react';
import styled from 'styled-components';
import { MobileAndTabletHeader, TextBoxAndImgBoxContainer, DesktopHeader } from 'components';
import { green, darkGrey, tablet, desktop } from 'sharedStyles';
import throttle from 'lodash.throttle';

class IndexPage extends Component {
  state = {
    onMobile: null,
    onTablet: null
  };

  handleWindowResize = throttle(() => {
    const viewportWidth = window.innerWidth;
    const onMobile = viewportWidth < parseInt(tablet, 10);
    const onTablet = viewportWidth >= parseInt(tablet, 10) && viewportWidth < parseInt(desktop, 10);
    this.setState((prevState) => {
      if (onMobile !== prevState.onMobile || onTablet !== prevState.onTablet) {
        return {
          onMobile,
          onTablet
        };
      }
    });
  }, 100); // Or maybe change this to 250?

  componentDidMount() {
    this.handleWindowResize();
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  render() {
    const { data } = this.props;
    const {
      desktopLogo,
      mobileAndSupermarket,
      mobileAndTabletLogo,
      peopleOfClane,
      piggy,
      tearOfJoy,
      tearOfJoyMac
    } = data;
    const { onMobile, onTablet } = this.state;
    return (
      <Wrapper>
        <MobileAndTabletHeader mobileAndTabletLogoSizes={mobileAndTabletLogo.sizes} />
        <DesktopHeader desktopLogoSizes={desktopLogo.sizes} piggySizes={piggy.sizes} />
        <HR />
        <TextBoxAndImgBoxContainer
          backgroundColor={green}
          headerFirstLineText="What was"
          headerSecondLineText="the campaign?"
          imageSizes={tearOfJoy.sizes}
          textContent="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et."
          uniqueStyle={{
            top: onMobile ? 0 : onTablet ? '3.25vw' : '32.37px',
            width: onMobile ? '81vw' : onTablet ? '45vw' : '448.188px'
          }}
        />
        <HR />
        <TextBoxAndImgBoxContainer
          backgroundColor={darkGrey}
          headerFirstLineText="What was the"
          headerSecondLineText="creative brief?"
          imageSizes={peopleOfClane.sizes}
          textContent="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et."
          uniqueStyle={{
            height: onMobile ? null : '380px',
            width: onMobile ? '100vw' : onTablet ? '50vw' : '498px'
          }}
          gatsbyImgWrapperStyle={{
            objectPosition: onMobile ? 'center center' : onTablet ? 'left center' : 'left center'
          }}
        />
        <HR />
        <TextBoxAndImgBoxContainer
          backgroundColor={green}
          headerFirstLineText="What was the"
          headerSecondLineText="creative concept?"
          imageSizes={tearOfJoyMac.sizes}
          uniqueStyle={{
            top: onMobile ? 0 : onTablet ? '0.59vw' : '5.8764px',
            width: onMobile ? '81vw' : onTablet ? '40.25vw' : '400.875px'
          }}
          textContent="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et."
        />
        <HR />
        <TextBoxAndImgBoxContainer
          backgroundColor={darkGrey}
          headerFirstLineText="How did"
          headerSecondLineText="it go?"
          imageSizes={mobileAndSupermarket.sizes}
          mobileImageWidth="100vw"
          tabletImageWidth="81vw"
          uniqueStyle={{
            height: onMobile ? null : '380px',
            width: onMobile ? '100vw' : onTablet ? '50vw' : '498px'
          }}
          gatsbyImgWrapperStyle={{
            objectPosition: onMobile ? 'center center' : onTablet ? 'left center' : 'left center'
          }}
          textContent="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et."
        />
        <HR />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 996px;
`;

const secondHR = 5;
const thirdHR = 7;
const fourthHR = 9;
const fifthHR = 11;
const HR = styled.hr`
  border: 0;
  border-top: 0.063em solid rgb(208, 210, 211);
  margin: 0;

  &:nth-child(${secondHR}) {
    margin-top: -4vw;
  }

  &:nth-child(${fifthHR}) {
    margin-bottom: 4vw;
  }

  @media screen and (min-width: ${tablet}) {
    &:nth-child(${secondHR}),
    &:nth-child(${thirdHR}),
    &:nth-child(${fourthHR}),
    &:nth-child(${fifthHR}) {
      margin-top: 5.1vw;
    }
  }

  @media screen and (min-width: ${desktop}) {
    &:nth-child(${secondHR}),
    &:nth-child(${thirdHR}),
    &:nth-child(${fourthHR}),
    &:nth-child(${fifthHR}) {
      margin-top: 50.796px;
    }

    &:nth-child(${fifthHR}) {
      margin-bottom: 39.84px;
    }
  }
`;

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
