export { default as LandingPage } from "./pages/landing-page";
export { default as Login } from "./pages/login";

export { default as Admin } from "./pages/account/admin";
export { default as Settings } from "./pages/account/settings";

export { default as Analytics } from "./pages/dashboard/analytics";
export { default as Held } from "./pages/trade/held";

export { default as Buy } from "./pages/trade/buy";
export { default as Sell } from "./pages/trade/sell";
export { default as Pending } from "./pages/dashboard/pending";

export { default as Assets } from "./pages/trade/assets";
export { default as Purchases } from "./pages/dashboard/purchases";
export { default as Sales } from "./pages/dashboard/sales";

export const PageData = {
  Dashboard: ["Purchases", "Sales", "Pending"],
  Trade: ["Buy", "Sell"],
  Account: ["Settings", "Admin"],
};

export const NavImages = {
  Dashboard: require("./assets/images/dashboard-dark.png").default,
  Trade: require("./assets/images/trade-dark.png").default,
  Account: require("./assets/images/account-dark.png").default,
};
