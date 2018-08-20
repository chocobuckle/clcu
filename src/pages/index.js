import React, { Component } from 'react';
import styled from 'styled-components';
import { MobileAndTabletHeader, TextBoxAndImgBoxContainer, DesktopHeader } from 'components';
import { green, darkGrey, tablet } from 'sharedStyles';
import throttle from 'lodash.throttle';

class IndexPage extends Component {
  state = {
    onMobile: null
  };

  handleWindowResize = throttle(() => {
    const viewportWidth = window.innerWidth;
    const onMobile = viewportWidth < parseInt(tablet, 10);
    this.setState((prevState) => {
      if (prevState.onMobile !== onMobile) {
        return {
          onMobile
        }
      }
    });
  }, 250);

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
    const { onMobile } = this.state;
    console.log(onMobile);
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
          mobileImageWidth="81vw"
          tabletImageWidth="45vw"
          textContent="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et."
          uniqueStyle={{
            position: 'relative',
            top: '0' // 1.5 in desktop
          }}
        />
        <HR />
        <TextBoxAndImgBoxContainer
          backgroundColor={darkGrey}
          headerFirstLineText="What was the"
          headerSecondLineText="creative brief?"
          imageSizes={peopleOfClane.sizes}
          mobileImageWidth="100vw"
          tabletImageWidth="50vw"
          textContent="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et."
          uniqueStyle={
            {
              // if desktop, height should be 380px, or in mobile is should be null. If desktop 'object-posiiton' should be 'left center', in mobile 'center center'
            }
          }
        />
        <HR />
        <TextBoxAndImgBoxContainer
          backgroundColor={green}
          headerFirstLineText="What was the"
          headerSecondLineText="creative concept?"
          imageSizes={tearOfJoyMac.sizes}
          mobileImageWidth="81vw"
          tabletImageWidth="81vw"
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
const lastHR = 11;
const HR = styled.hr`
  border: 0;
  border-top: 0.063em solid rgb(208, 210, 211);
  margin: 0;

  &:nth-child(${secondHR}) {
    margin-top: -4vw;
  }

  &:nth-child(${lastHR}) {
    margin-bottom: 4vw;
  }

  @media screen and (min-width: ${tablet}) {
    ${'' /* margin-top: 7vw; */}

    &:nth-child(${secondHR}) {
      margin-top: 5.65vw;
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
