import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import Avatar from "../../components/Avatar";

export default function Profile() {
  const { user } = useAuthContext();
  return (
    <div>
      <h1>Profile Information</h1>
      <div>Username: {user.displayName}</div>
      <div>
        <div>Display Picture:</div>
        <div>
          <Avatar src={user.photoURL} />
        </div>
      </div>
      <h2>Projects Created:</h2>
    </div>
  );
}
