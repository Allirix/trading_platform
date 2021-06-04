import { Link, useLocation } from "react-router-dom";
import { PageData, NavImages } from "../../routes";

import { getPath, getParentFromPath } from "../../helpers/navigation";
import "./AsideNavigation.css";
import "react-pro-sidebar/dist/css/styles.css";

const text = Object.keys(PageData);

// List-free nav https://css-tricks.com/navigation-in-lists-to-be-or-not-to-be/
function AsideNavigation({ organisation }) {
  const { pathname: currentPath } = useLocation();

  return (
    <aside>
      <div className="org-div">
        <span>{organisation}</span>
      </div>
      <nav>
        <PageButtons currentPath={currentPath} />
      </nav>
      <div className="sign-out">
        <Link to="/">Sign Out</Link>
      </div>
    </aside>
  );
}

const PageButtons = ({ currentPath }) =>
  text.map((pageName, i) => {
    const path = getPath(pageName, PageData[pageName][0]);
    const className = getActiveClassName(pageName, currentPath);
    return <PageButton key={"asideNav: " + i} {...{ path, className, pageName }} />;
  });

const PageButton = ({ path, className, pageName }) => (
  <div>
    <Link to={path} className={className}>
      <img src={NavImages[pageName]} alt="h" />
      <span>{pageName}</span>
    </Link>
  </div>
);

const getActiveClassName = (pageName, currentPath) =>
  `${pageName === getParentFromPath(currentPath) ? "active" : "inactive"}`;

export default AsideNavigation;
