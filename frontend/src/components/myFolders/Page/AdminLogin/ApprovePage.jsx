// import React, { useState, useEffect } from "react";
// import { Api_url } from "../../../../constant";

// const ApprovePage = () => {
//   const [approvedItems, setApprovedItems] = useState([]);

//   useEffect(() => {
//     const fetchApprovedData = async () => {
//       try {
//         const response = await fetch(`${Api_url}/create_post/getApprovedData`);
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setApprovedItems(data);
//       } catch (error) {
//         console.error("Error fetching approved data:", error);
//       }
//     };

//     fetchApprovedData();
//   }, []);

//   return (
//     <>
//       <div className="container-fluid" style={{ overflow: "auto" }}>
//         <div className="row justify-content-center">
//           <div className="col-10">
//             {approvedItems.map((item, index) => (
//               <div className="card" key={index}>
//                 <div className="text-holder">
//                   <h3>{item.name}</h3>
//                   <p>{item.text}</p>
//                   <p>{item.addres}</p>
//                   <p>{item.category}</p>
//                   <p>{item.eventDate}</p>
//                   <p>{item.eventTime}</p>
//                   <p>{item.eventVenue}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ApprovePage;

import React, { useState, useEffect } from "react";
import { Api_url } from "../../../../constant";

const ApprovePage = () => {
  const [approvedItems, setApprovedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  useEffect(() => {
    const fetchApprovedData = async () => {
      try {
        const response = await fetch(`${Api_url}/create_post/getApprovedData?page=${currentPage}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setApprovedItems(data.approvedData);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching approved data:", error);
      }
    };

    fetchApprovedData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="container-fluid" style={{ overflow: "auto" }}>
        <div className="row justify-content-center">
          <div className="col-10">
            <table className="table table-bordered mt-5">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Text</th>
                  <th scope="col">Address</th>
                  <th scope="col">Category</th>
                  <th scope="col">Event Date</th>
                  <th scope="col">Event Time</th>
                  <th scope="col">Event Venue</th>
                </tr>
              </thead>
              <tbody>
                {approvedItems.map((item, index) => (
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
          <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
        <span>{currentPage}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>&gt;</button>
      </div>
        </div>
      </div>
    </>
  );
};

export default ApprovePage;
