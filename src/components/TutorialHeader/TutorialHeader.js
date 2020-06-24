import React from 'react';
import HeaderContainer from 'carbon-components-react/lib/components/UIShell/HeaderContainer';
import {
  Header,
  HeaderName,
  HeaderMenuButton,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import Search20 from '@carbon/icons-react/lib/search/20';
import Document20 from '@carbon/icons-react/lib/document/20';
import Application20 from '@carbon/icons-react/lib/application/20';
import { Link } from 'react-router-dom';

const TutorialHeader = () => (
  <Header aria-label="IBM Cloud Pak for Data">
    <SkipToContent />
    <HeaderMenuButton aria-label="Open menu" />
    <HeaderName href="#" prefix="IBM">
      Cloud Pak for Data
    </HeaderName>
    <HeaderNavigation>
      <HeaderMenuItem element={Link} to="/repos">
        Repositories
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/user">
        User
      </HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Search">
        <Search20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="Application">
        <Application20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="Document">
        <Document20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="Notifications">
        <Notification20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="User Avatar">
        <UserAvatar20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
);

export default TutorialHeader;
