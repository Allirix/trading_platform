import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactApexCharts from "react-apexcharts";

console.log(ReactApexCharts);

const LandingPage = () => {
  return (
    <div>
      <Helmet>
        <title>Landing Page</title>
        <meta name="description" content="This is a description of the page" />
      </Helmet>
      <h1>Landing Page</h1>
      <Link to="/login">Login</Link>

      <ul>
        <li>
          <b>Market Copy:</b> As a user I want to see information about the product
        </li>
        <li>
          <b>Login/SignUp:</b> As a user I want to access the product
        </li>
      </ul>
      <Link to="/login">Sign Up</Link>
    </div>
  );
};

export default LandingPage;
