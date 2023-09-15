import React from "react";

function UserDetails({ username, email }) {
    
  return (
    <div style={{width:"10px" ,height:"10px"}}>
      <h2>User Details</h2>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Email:</strong> {email}\
      </p>
    </div>
  );
}

export default UserDetails;
