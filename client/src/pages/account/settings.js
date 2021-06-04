import React from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div>
      <ul>
        <li>
          Change Password:
          <ChangePassword />
        </li>
        <li>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Settings;

const ChangePassword = () => {
  return (
    <form action="">
      <label htmlFor="current-password">Current Password</label>
      <input type="password" name="current-password" />

      <label htmlFor="new-password">Current Password</label>
      <input type="password" name="new-password" />
    </form>
  );
};
