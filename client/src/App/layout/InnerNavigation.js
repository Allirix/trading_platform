// @flow
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { getParentRoutingData, getParentFromPath } from "../../helpers/navigation";
import "./Inner-Navigation.css";

import Nav from "react-bootstrap/Nav";

const InnerNavigation = () => {
  const { pathname: currentPath } = useLocation();
  const parentName = getParentFromPath(currentPath);

  console.log(parentName);

  const routingData = getParentRoutingData(parentName, false);

  const isActive = (path) => (path === currentPath ? "active" : "inactive");

  return (
    <div className="inner-nav">
      <div className="inner-nav-div">
        <Nav variant="tabs">
          {routingData.map(({ path, child }) => (
            <Link to={path} key={child} className={"inner-nav-anchor " + isActive(path)}>
              {child}
            </Link>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default InnerNavigation;
