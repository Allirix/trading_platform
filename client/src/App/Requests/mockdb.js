// users/usernames/(trades, profile)
// organisations/{trades, users, }
// trades/ ()
// assset/ org
//

import { USERS, ORGANISATIONS, TRADES, ASSETS, LOGIN } from "./requests";

export const trade = ({ type = "BUY", assetName = "CPU Hours", offer = 100 } = {}) => ({
  tradeID: 1234,
  type,
  quantity: 5,
  asset: {
    assetID: 1111,
    assetName,
  },
  datetime: { complete: "", abort: "", issued: "3:43PM 14/05/21" },
  price: { offer, sale: 100 },
  sale: {
    buyer: { username: "david", orgName: "IT", orgID: 1321 },
    seller: { username: "david", orgName: "HR", orgID: 1234 },
  },
});

//trade types {isComplete, isAvailable, }

export const trades = [
  trade({ assetName: "Room 123", offer: 34 }),
  trade({ assetName: "Room 1234123", offer: 22 }),
  trade(),
];

export const asset = ({ assetName = "CPU Hours", orgName = "IT" } = {}) => ({
  assetID: 12341,
  quantity: 5,
  assetName,
  organisation: { orgName, orgID: 1321 },

  trades,
});

export const user = {
  username: "david",
  firstname: "David",
  lastname: "Hampton",
  credits: 200,
  trades: [trade(), trade()],
  organisation: {
    orgName: "HR",
    orgID: 1234,
    trades: [trade(), trade()],
  },
  watchlist: [asset(), asset()],
  admin: false,
};

const users = [user, user];

//assets

export const assets = [
  asset({ assetName: "Room 123" }),
  asset(),
  asset({ assetName: "Electricity" }),
  asset({ assetName: "Pencils" }),
];

// organisation

export const organisation = {
  id: 1234,
  orgName: "HR",
  assets: [
    asset({ assetName: "CPU Hours", orgName: "HR" }),
    asset({ assetName: "Room 2342", orgName: "HR" }),
    asset({ assetName: "Test Asset 1234", orgName: "HR" }),
  ],
  trades,
};

const organisations = [organisation, organisation];

const login = { ...user, token: "MOCK-TOKEN" };

export const mockDB = {
  [USERS]: users,
  [ORGANISATIONS]: organisations,
  [ASSETS]: assets,
  [TRADES]: trades,
  [LOGIN]: login,
};

export default mockDB;
