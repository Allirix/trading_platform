import React from "react";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import useLogin, { SUCCESS } from "../App/Authentication/useLogin";

const Login = () => {
  const { status, tryLogin, onChange } = useLogin();
  if (status === SUCCESS) return <Redirect to="/dashboard/purchases" />;

  return (
    <div>
      <Helmet>
        <title>Landing Page</title>
        <meta name="description" content="This is a description of the page" />
      </Helmet>
      <h1>Login</h1>
      <input type="text" placeholder="Username" onChange={onChange.username} />
      <input type="password" placeholder="Password" onChange={onChange.password} />
      <button onClick={tryLogin}>Login</button>
      {status && status !== SUCCESS ? <span>{status}</span> : null}
    </div>
  );
};

export default Login;
