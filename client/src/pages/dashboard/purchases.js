import React from "react";

import useFetch from "../../App/Requests/useFetch";
import requests, { USERS } from "../../App/Requests/requests";
import Loading from "../../App/components/Loading";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import ItemModal from "../../App/components/Tables/ItemModal";

const Purchases = ({ user: { username } }) => {
  const request = requests[USERS]({ params: { id: username } });
  const { data, loading } = useFetch(request);

  if (loading) return <Loading />;

  console.log(data);
  const user = data[0];
  const tableHeaders = ["Asset", "Quantity", "Price", "Date"];

  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h3>
            {username.toUpperCase()}! You have been assigned {user.credits} Credits
          </h3>
          <p>Go to the Trades panel to buy assets</p>
        </Container>
      </Jumbotron>
      <h3>Recent Completed Trades</h3>
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
            {user.organisation.trades.map((trade, i) => (
              <tr key={i}>
                <th>
                  <ItemModal asset={{ ...trade.asset }} />
                </th>
                <th>{trade.quantity}</th>
                <th>{trade.price.sale} Credit</th>

                <th>{trade.datetime.complete}</th>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Purchases;
