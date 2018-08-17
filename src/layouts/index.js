import React from 'react';
import { injectGlobal } from 'styled-components';
import Helmet from 'react-helmet';
import { darkGrey } from 'sharedStyles';

/* eslint-disable no-unused-expressions */
injectGlobal`
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
    font-size: calc(14px + 0.5vw);
    line-height: calc(1.1em + 0.5vw);
  }

  p {
    font-size: calc(12px + 0.5vw);
    color: ${darkGrey};
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
    <div>{children()}</div>
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
