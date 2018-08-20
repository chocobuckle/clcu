import React from 'react';
import MobileHeader from 'components/Header/MobileHeader';
import TabletAndDesktopHeader from 'components/Header/TabletAndDesktopHeader';

function Header({ onMobile, mobileLogoSizes, tabletAndDesktopLogoSizes, piggySizes }) {
  return (
    <div>
      {onMobile ? (
        <MobileHeader mobileLogoSizes={mobileLogoSizes} />
      ) : (
        <TabletAndDesktopHeader
          tabletAndDesktopLogoSizes={tabletAndDesktopLogoSizes}
          piggySizes={piggySizes}
        />
      )}
    </div>
  );
}
export default Header;
