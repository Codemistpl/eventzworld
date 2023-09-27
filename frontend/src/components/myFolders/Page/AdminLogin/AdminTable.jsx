import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Api_url } from "../../../../constant";
// import AdminDashboard from '../../Page/AdmunDashboard/AdminDashboard';

const Card = ({ item }) => {
  return (
    <div className="card">
      {/* <img
        className="image-title"
        src={`http://localhost:4113/image/${item.image}`}
        alt={item.title}
      /> */}
      {
        <div className="text-holder">
          <h3>{item.name}</h3>
          <p>{item.text}</p>
          <p>{item.addres}</p>
          <p>{item.category}</p>
          <p>{item.eventDate}</p>
          <p>{item.eventTime}</p>
          <p>{item.eventVenue}</p>
          <Link to={`/SeeMore/${item.id}`}>
            <button>SeeMore</button>
          </Link>
        </div>
      }
    </div>
  );
};

const AdminTable = () => {
  const [items, setItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [tableData, setTableData] = useState()
  const [selectedData, setSelectedData] = useState([]);
  const [aprooveId, setaprooveid] = useState()


  const toggleSelectAll = () => {
    setSelectAll((prevSelectAll) => !prevSelectAll);
    setItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        selected: !selectAll,
      }))
    );
  };

  const handleItemSelect = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };
  const handleReject = () => {

    const selectedItems = items.filter((item) => item.selected);

    console.log("Selected items to reject:", selectedItems);
  };

  const handleApprove = () => {

    const selectedRows = items.filter((item) => item.selected);

    // Use the selectedRows array to perform actions on selected items
    console.log("Selected items to approve:", selectedRows)


    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.selected) {
          return { ...item, approved: true, selected: false };
        }
        return item;
      })
    );

  };

  const approveData = async (event) => {
    event.preventDefault();
    console.log("Form submitted", items);

    try {
      let selectedItems = items.filter((item) => item.selected);

      const response = await fetch(`${Api_url}/create_post/aprooveData`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ selectedItems }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Assuming the API call was successful, update the 'approved' property of selected items
      setItems((prevItems) =>
        prevItems.map((item) => {
          // if (selectedItems.some((selectedItem) => selectedItem.id === item.id))
          if
            (selectedItems = items.filter((item) => item.selected)) {
            return { ...item, approved: true, selected: false };
          }
          return item;
        })
      );
      window.alert("Items approved successfully!");
    } catch (error) {
      console.error("Error occurred during approval:", error.message);
      // Handle the error and display an appropriate message to the user
      window.alert("An error occurred during approval");
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4113/create_post/getCreatePost"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (id) => {
    setaprooveid(id)

  }

  return (
    <>
      <div className="container-fluid" style={{ overflow: "auto" }}>
        <div className="row justify-content-center">
          <div className="col-10">
            <table class="table table-borderless mt-5">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">name</th>
                  <th scope="col">text</th>
                  <th scope="col">addres</th>
                  <th scope="col">category</th>
                  <th scope="col">eventDate</th>
                  <th scope="col">eventTime</th>
                  <th scope="col">eventVenue</th>
                  {/* {/ <th scope="col">Aproove</th> /} */}
                  <th scope="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={selectAll}
                        onChange={toggleSelectAll}
                      />
                      <label className="form-check-label">Select All</label>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.text}</td>
                    <td>{item.addres}</td>
                    <td>{item.category}</td>
                    <td>{item.eventDate}</td>
                    <td>{item.eventTime}</td>
                    <td>{item.eventVenue}</td>

                    <td>
                      {!item.approved && (
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={item.selected}
                            onChange={() => handleItemSelect(item.id)}
                          />

                        </div>
                      )}
                    </td>
                  </tr>
                ))}

                {/* <tbody>
                  {items.map((item, index) => (
                    <Card key={item.id} item={item} />
                  ))}
                </tbody> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <td>
        {/* {!items.some((item) => item.selected && !item.approved) ? (
        <button onClick={handleApprove}>Approve</button>
      ) : (
        <button onClick={approveData}>Approve Selected</button>
      )} */}
      </td>
      <div>
        {/* {/ Render the button if at least one item is selected /} */}
        {/* {selectedData.length > 0 && (
    <button onClick={handleApprove}>Approve</button>
  )} */}
      </div>

      <td>

        {/* {/ <button onClick={handleReject}>Reject</button> /} */}
        <button onClick={approveData} >Approve</button>
      </td>

    </>
  );
};

export default AdminTable;
