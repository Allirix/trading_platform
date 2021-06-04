import React from "react";
import TopNavigation from "./TopNavigation";
import InnerNavigation from "./InnerNavigation";
import AsideNavigation from "./AsideNavigation";
import { NavigationHelmet } from "./NavigationHelmet";
import "./Layout.css";

const Layout = ({ children, user }) => {
  return (
    <>
      <NavigationHelmet />
      <TopNavigation {...user} />
      <AsideNavigation organisation={user?.organisation?.orgName} />
      <div className="layout-window">
        <InnerNavigation />
        <div className="inner-nav-window">{children}</div>
      </div>
    </>
  );
};

export default Layout;
