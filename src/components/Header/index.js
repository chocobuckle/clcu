import React from 'react';
import styled from 'styled-components';
import MobileHeader from 'components/Header/MobileHeader';
import TabletAndDesktopHeader from 'components/Header/TabletAndDesktopHeader';

function Header({ onMobile, onTablet, mobileLogoSizes, tabletAndDesktopLogoSizes, piggySizes }) {
  return (
    <div>
      {onMobile && <MobileHeader mobileLogoSizes={mobileLogoSizes} />}
      {onTablet && (
        <TabletAndDesktopHeader
          tabletAndDesktopLogoSizes={tabletAndDesktopLogoSizes}
          piggySizes={piggySizes}
        />
      )}
    </div>
  );
}
export default Header;
