import ItemModal from "./ItemModal";
import Table from "react-bootstrap/Table";

import "./AssetTable.css";

const AssetTable = ({ assets, assetOption, page }) => {
  const organisations = mapAssetsToOrganisation(assets);

  // filter out assets that do not include text in assetOption
  Object.keys(organisations).forEach((organisation) => {
    organisations[organisation] = organisations[organisation].filter((asset) =>
      asset.assetName.toLowerCase().includes(assetOption.toLowerCase())
    );
  });

  return Object.keys(organisations).map((organisation, i) => (
    <div className="trade-section">
      <h3>{organisation}</h3>
      <OrganisationTable
        assets={organisations[organisation]}
        key={i + "asset"}
        page={page}
      />
      <ul>
        <li>Clicking Asset Name brings up info about all trades</li>
      </ul>
    </div>
  ));
};

export const OrganisationTable = ({ assets, page }) => {
  const tableHeaders = ["Asset", "Quantity", "Price", "Action"];
  return (
    <div className="asset-card">
      <Table responsive>
        <thead>
          <tr className="table-headers">
            {tableHeaders.map((e) => (
              <th>{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <Assets assets={assets} page={page} />
        </tbody>
      </Table>
    </div>
  );
};

const Assets = ({ assets, page }) => {
  // get price, get asset name

  const onClickHandlerExisting = (e) => {
    alert(`Make POST request to server at /trades/${e.target.id} (traeID)`);
  };

  // table
  return assets.map((asset, i) => {
    //find the cheapest asset to display. User can click modal to see other trades
    const assetBestDeal = asset.trades.reduce(getBestDeal(page), {
      price: null,
      id: null,
      quantitiy: null,
    });
    return (
      <Row
        key={i + "tr" + asset.tradeID}
        {...{ asset, assetBestDeal, onClickHandlerExisting, page }}
      />
    );
  });
};

const Row = ({ asset, assetBestDeal, onClickHandlerExisting, page }) => {
  return (
    <tr>
      <th>
        <ItemModal asset={asset} />
      </th>
      <th>{assetBestDeal.quantity}</th>
      <th>{assetBestDeal.price} CR</th>
      <th>
        <button
          onClick={onClickHandlerExisting}
          id={assetBestDeal.id}
          className={"sale-btn " + (page === "Buy" ? "buy-btn" : "sell-btn")}>
          {page}
        </button>
      </th>
    </tr>
  );
};

export default AssetTable;

const mapAssetsToOrganisation = (assets) => {
  return assets.reduce((organisation, e) => {
    const key = e.organisation.orgName;
    if (key in organisation) organisation[key].push(e);
    else organisation[key] = [e];
    return organisation;
  }, {});
};

const getBestDeal = (page) => {
  return (acc, a) => {
    const {
      quantity,
      price: { offer },
      tradeID,
    } = a;

    const trade = { price: offer, id: tradeID, quantity };

    if (acc.id === null) return trade;
    // Buy lowest offer
    if (page === "Buy") return acc > offer ? trade : acc;
    //sell highest offer
    else return acc < offer ? trade : acc;
  };
};
