import * as Pages from "../routes";

export const getPath = (name, firstPage) =>
  `/${name.toLowerCase()}/${firstPage.toLowerCase()}`;

export const getPageRoutingData = (includeComponents = true) =>
  Object.keys(Pages.PageData).map((parent) => {
    //map the JSX component to the name in PageData

    return getParentRoutingData(parent);
  });

export const getParentRoutingData = (parent, includeComponents = true) =>
  Pages.PageData[parent].map((child) => ({
    child,
    parent,
    Component: includeComponents ? Pages[child] : null,
    path: getPath(parent, child),
  }));

export const getParentFromPath = (path) => {
  const parent = path.split("/")[1];
  return parent[0].toLocaleUpperCase() + parent.substring(1, parent.length);
};

export const getChildFromPath = (path) => {
  const parent = path.split("/")[2];
  return parent[0].toLocaleUpperCase() + parent.substring(1, parent.length);
};
