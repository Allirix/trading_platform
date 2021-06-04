import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Owned = () => {
  const { search } = useLocation();
  const assetID = search.substring(1, search.length - 1);

  if (assetID !== "")
    return (
      <>
        <Breadcrumbs id={assetID} />
        <AssetCard id={assetID} />
      </>
    );

  return (
    <div>
      <ul>
        <li>I want to see a list of all assets (existing trades or not)</li>
        <li>
          I want to click on an asset to learn more about it (price histroy, current
          trades)
        </li>
      </ul>
    </div>
  );
};

const Breadcrumbs = ({ id }) => {
  return (
    <div>
      <span>
        <Link to="/trade/buy">Trade</Link> {"> " + id}
      </span>
    </div>
  );
};

const AssetCard = ({ id }) => {
  const [asset, setAsset] = useState(null);

  useEffect(() => {
    alert(`GET asset info from /assets/${id}`);
    setAsset({ assetName: "", trades: [] });
  }, [id]);

  return asset === null ? <span>Loading...</span> : <div className=""></div>;
};

export default Owned;
