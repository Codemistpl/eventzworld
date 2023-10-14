import React, { useState, useEffect } from "react";
import { Api_url } from "../../../../constant";

const RejectPage = () => {
  const [rejectedItems, setRejectedItems] = useState([]);

  useEffect(() => {
    const fetchRejectedData = async () => {
      try {
        const response = await fetch(`${Api_url}/create_post/getRejectedData`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRejectedItems(data);
      } catch (error) {
        console.error("Error fetching rejected data:", error);
      }
    };

    fetchRejectedData();
  }, []);

  return (
    <div className="container">
      <h1>Rejected Posts</h1>
      <table className="table table-bordered">
        {/* Render table rows with 'rejectedItems' */}
      </table>
    </div>
  );
};

export default RejectPage;
