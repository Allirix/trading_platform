import React from "react";

import useFetch from "../../App/Requests/useFetch";
import requests, { ORGANISATIONS } from "../../App/Requests/requests";
import Loading from "../../App/components/Loading";

const Pending = ({
  user: {
    organisation: { orgName },
  },
}) => {
  const { data, loading } = useFetch(
    requests[ORGANISATIONS]({ params: { id: orgName } })
  );

  if (loading) return <Loading />;

  console.log(data);
  let trades = {};
  if (Array.isArray(data)) trades = data[0].trades.filter((e) => isPending(e));
  else trades = data.trades.filter((e) => isPending(e));
  console.log(trades);
  return (
    <div>
      <li>
        I want to see the trades my organisation has made that are not reconciled |
        user.organisation.trades.filer(out no complete datetime)
      </li>
      {trades.map((e) => (
        <div>
          <ul>
            <li>
              <b>Asset: {e.asset.assetName}</b>
            </li>
            <li>Quantity: {e.quantity}</li>
            <li>Price: {e.price.offer}</li>
            <li>Issued: {e.datetime.issued}</li>
            <li>Type: {e.type} </li>
            <li>
              <button>Remove</button>
            </li>
          </ul>
        </div>
      ))}
      <br />
      <ul>
        <li>
          I want to remove trades that have not been reconciled | add button to make
          DELETE|POST|UPDATE request to the database
        </li>
      </ul>
    </div>
  );
};

export default Pending;

const isPending = (trade) => true;
