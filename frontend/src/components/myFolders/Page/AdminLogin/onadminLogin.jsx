// ParentComponent.js
import React from "react";
import AdminLogin from "./AdminLogin";

function onadminLogin() {
  const handleAdminLogin = () => {
    // Define the logic you want to perform upon admin login
    console.log("Admin logged in");
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* <onAdminLogin={handleAdminLogin} /> */}
    </div>
  );
}

export default onadminLogin;
