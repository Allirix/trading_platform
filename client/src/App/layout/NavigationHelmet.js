import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import { getParentFromPath, getChildFromPath } from "../../helpers/navigation";

export const NavigationHelmet = () => {
  const { pathname } = useLocation();
  const parent = getParentFromPath(pathname);
  const child = getChildFromPath(pathname);
  return (
    <Helmet>
      <title>
        302 Market: {parent} - {child}
      </title>
      <meta name="description" content="This is a description of the page" />
    </Helmet>
  );
};
