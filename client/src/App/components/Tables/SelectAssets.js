import React from "react";
import "./SelectAsset.css";
import Select from "react-select";

import { useLocation } from "react-router-dom";

import { getChildFromPath } from "../../../helpers/navigation";

// const Options = ({ assets }) =>
//   assets.map((asset) => <option value={asset.assetName}>{asset.assetName}</option>);

const SelectAssets = ({ onChange, assets }) => {
  const { pathname } = useLocation();

  const onClickHandler = (e) => {
    e.preventDefault();

    alert(
      `Make POST request to server at /trades/ with Price/Quantity, username, & AssetID`
    );
  };

  const page = getChildFromPath(pathname);
  const options = assets
    .map((asset) => ({
      label: asset.organisation.orgName + " - " + asset.assetName,
      value: asset.assetName,
    }))
    .concat({
      label: "All",
      value: "",
    });

  return (
    <div className="select-asset">
      <h2>{page} an Asset</h2>
      <form onSubmit={onClickHandler}>
        <InputDiv name="Asset">
          <Select options={options} onChange={onChange} />
        </InputDiv>
        <InputDiv name={page + " Price"}>
          <input
            className="asset-input"
            name="offer-price"
            type="text"
            placeholder="e.g. $10"
          />
          ,
        </InputDiv>
        <InputDiv name={"Quantity"}>
          <input
            className="asset-input"
            name="quantity"
            type="text"
            placeholder="e.g. 10"
          />
          ,
        </InputDiv>
        <InputDiv name={"Custom Offer"}>
          <input
            type="submit"
            value={page}
            className={"sale-btn " + (page === "Buy" ? "buy-btn" : "sell-btn")}
          />
        </InputDiv>
      </form>
    </div>
  );
};

const InputDiv = ({ name, children }) => (
  <div className="input-div">
    <label htmlFor={name}>{name}</label>
    {children}
  </div>
);

export default SelectAssets;
