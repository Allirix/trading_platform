import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <>
      <br />
      <div style={{ width: "fit-content", margin: "auto" }}>
        <span>Loading your request...</span>
      </div>
      <br />
      <div style={{ width: "fit-content", margin: "auto" }}>
        <Spinner animation="border" variant="primary" size="lg" />
        {/* <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" /> */}
      </div>
    </>
  );
};

export default Loading;
