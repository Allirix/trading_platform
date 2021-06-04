import React from "react";

import TradeTable from "../../App/components/Tables/TradeTable";
import useFetch from "../../App/Requests/useFetch";
import requests, { ASSETS } from "../../App/Requests/requests";
import Loading from "../../App/components/Loading";

const Buy = () => {
  const { data, loading } = useFetch(requests[ASSETS]());
  return loading ? <Loading /> : <TradeTable assets={data} page="Buy" />;
};

export default Buy;
