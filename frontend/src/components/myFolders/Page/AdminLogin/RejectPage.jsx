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
        console.log("Received data:", data); 
        if (Array.isArray(data)) {
          setRejectedItems(data);
        } else {
          console.error("Data format is unexpected:", data);
        }
      } catch (error) {
        console.error("Error fetching rejected data:", error);
      }
    };
  
    fetchRejectedData();
  }, []);
  

  return (
    <>
      <div className="container-fluid" style={{ overflow: "auto" }}>
        <div className="row justify-content-center">
          <div className="col-10">
            <table className="table table-bordered mt-5">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">name</th>
                  <th scope="col">text</th>
                  <th scope="col">Address</th>
                  <th scope="col">category</th>
                  <th scope="col">eventDate</th>
                  <th scope="col">eventTime</th>
                  <th scope="col">eventVenue</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(rejectedItems) && rejectedItems.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.text}</td>
                    <td>{item.addres}</td>
                    <td>{item.category}</td>
                    <td>{item.eventDate}</td>
                    <td>{item.eventTime}</td>
                    <td>{item.eventVenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
       
        </div>
      </div>
    </>
  );
};

export default RejectPage;
