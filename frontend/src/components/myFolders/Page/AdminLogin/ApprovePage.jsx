import React, { useState, useEffect } from "react";
import { Api_url } from "../../../../constant";

const ApprovePage = () => {
  const [approvedItems, setApprovedItems] = useState([]);

  useEffect(() => {
    const fetchApprovedData = async () => {
      try {
        const response = await fetch(`${Api_url}/create_post/getApprovedData`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setApprovedItems(data);
      } catch (error) {
        console.error("Error fetching approved data:", error);
      }
    };

    fetchApprovedData();
  }, []);

  return (
    <div className="container">
      <h1>Approved Posts</h1>
      <table className="table table-bordered">
        {/* Render table rows with 'approvedItems' */}
      </table>
    </div>
  );
};

export default ApprovePage;
