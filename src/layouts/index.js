import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import Helmet from 'react-helmet';
import { darkGrey, lightGrey, desktop } from 'sharedStyles';

/* eslint-disable no-unused-expressions */
injectGlobal`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  li {
    font-family: Open Sans;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: calc(12px + 0.5vw);
    line-height: calc(1.1em + 0.5vw);

    @media screen and (min-width: ${desktop}) {
      font-size: 16.98px;
      line-height: 23.658px;
    }
  }

  p {
    font-size: calc(9px + 0.5vw);
    color: ${darkGrey};

    @media screen and (min-width: ${desktop}) {
      font-size: 13.98px;
    }
  }

  h1 {
    font-size: 2em;
    line-height: 1.25em;
  }

  h2 {
    font-size: 1.625em;
    line-height: 1.15384615em;
  }

  h3 {
    font-size: 1.375em;
    line-height: 1.13636364em;
  }

  h4 {
    font-size: 1.125em;
    line-height: 1.11111111em;
  }
`;
/* eslint-enable no-unused-expressions */

const Layout = ({ children, data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} />
    <div style={{ backgroundColor: lightGrey }}>{children()}</div>
  </div>
);

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
