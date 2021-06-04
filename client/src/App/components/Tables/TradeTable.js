import { useState } from "react";

import SelectAssets from "./SelectAssets";
import AssetTable from "./AssetTable";

const TradeTable = ({ assets, page }) => {
  const [state, setState] = useState({ assetOption: "", price: null });

  const onChange = (e) => setState((state) => ({ ...state, assetOption: e.value }));

  return (
    <>
      <SelectAssets {...{ onChange, assetOption: state.assetOption, assets }} />
      <AssetTable assetOption={state.assetOption} assets={assets} page={page} />
    </>
  );
};

export default TradeTable;
