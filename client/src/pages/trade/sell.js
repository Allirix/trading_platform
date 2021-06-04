import React from "react";

import TradeTable from "../../App/components/Tables/TradeTable";
import requests, { ORGANISATIONS } from "../../App/Requests/requests";
import useFetch from "../../App/Requests/useFetch";
import Loading from "../../App/components/Loading";

const Sell = ({ user = { organisation: { orgName: "HR" } } }) => {
  // fetch all organisations. Query for the organisation I am in.

  const { data, loading } = useFetch(
    requests[ORGANISATIONS]({ params: { orgName: user?.organisation?.orgName } })
  );

  return loading ? <Loading /> : <TradeTable assets={data[0].assets} page="Sell" />;
};

export default Sell;
