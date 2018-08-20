import React, { Component } from 'react';
import styled from 'styled-components';
import { Header, TextBoxAndImgBoxContainer } from 'components';
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
  }, 100);

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
      mobileAndSupermarket,
      mobileLogo,
      peopleOfClane,
      piggy,
      tabletAndDesktopLogo,
      tearOfJoy,
      tearOfJoyMac
    } = data;
    const { onMobile, onTablet } = this.state;
    return (
      <Wrapper>
        <Header
          mobileLogoSizes={mobileLogo.sizes}
          onMobile={onMobile}
          onTablet={onTablet}
          piggySizes={piggy.sizes}
          tabletAndDesktopLogoSizes={tabletAndDesktopLogo.sizes}
        />
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
          gatsbyImgWrapperStyle={{
            objectPosition: onMobile ? 'center center' : onTablet ? 'left center' : 'left center'
          }}
          headerFirstLineText="What was"
          headerSecondLineText="the creative brief?"
          imageSizes={peopleOfClane.sizes}
          swapOrder
          textContent="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et."
          uniqueStyle={{
            height: onMobile ? null : '380px',
            width: onMobile ? '100vw' : onTablet ? '50vw' : '498px'
          }}
        />
        <HR />
        <TextBoxAndImgBoxContainer
          backgroundColor={green}
          headerFirstLineText="What was the"
          headerSecondLineText="creative concept?"
          imageSizes={tearOfJoyMac.sizes}
          textContent="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et."
          uniqueStyle={{
            top: onMobile ? 0 : onTablet ? '0.53vw' : '5.2788px',
            width: onMobile ? '81vw' : onTablet ? '40.25vw' : '400.875px'
          }}
        />
        <HR />
        <TextBoxAndImgBoxContainer
          backgroundColor={darkGrey}
          gatsbyImgWrapperStyle={{
            objectPosition: onMobile ? 'center center' : onTablet ? '39% 50%' : 'left center'
          }}
          headerFirstLineText="How did"
          headerSecondLineText="it go?"
          imageSizes={mobileAndSupermarket.sizes}
          swapOrder
          textContent="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et."
          uniqueStyle={{
            height: onMobile ? null : '380px',
            width: onMobile ? '100vw' : onTablet ? '50vw' : '498px'
          }}
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

const secondHR = 4;
const thirdHR = 6;
const fourthHR = 8;
const fifthHR = 10;
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
    mobileLogo: imageSharp(id: { regex: "/mobile_logo.png/" }) {
      sizes(maxWidth: 311) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    tabletAndDesktopLogo: imageSharp(id: { regex: "/tablet_and_desktop_logo_in_macbook.png/" }) {
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
