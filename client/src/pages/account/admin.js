import React from "react";

const Admin = () => {
  const elevateRole = (e) => {
    // checked is reverted (true = not checked, but attempting to check)
    if (e.target.checked) {
      alert("Make request to change role to admin at /user/userID. Mocking fail");
      // if auth fails,
      e.preventDefault();
      // if auth succeeds
      //set state to admin
    } else {
      //set state to normal user
    }
  };

  return (
    <div>
      <ul>
        <li>
          Elevate to Admin Role:
          <input type="checkbox" onClick={elevateRole} />
        </li>
        <li>
          Create New Organisation Unit
          <ol>
            <li>New org Name</li>
            <li>New Org ID</li>
            <li>Create Org Button</li>
          </ol>
        </li>
        <li>
          Edit Organisation Unit
          <ol>
            <li>Select organisation</li>
            <li>Add User</li>
            <li>Edit details</li>
            <li>Submit changes Button</li>
          </ol>
        </li>

        <li>
          Add Asset Type
          <ol>
            <li>Name</li>
            <li>Organisations with ownership</li>
          </ol>
        </li>
        <li>
          Add New User{" "}
          <ol>
            <li>Username</li>
            <li>First & Last Name</li>
            <li>Organisation</li>
            <li>Submit button</li>
          </ol>
        </li>
        <li>
          Assign New User Admin Role{" "}
          <ol>
            <li>User name</li>
            <li>submit button</li>
          </ol>
        </li>
      </ul>
    </div>
  );
};

export default Admin;
