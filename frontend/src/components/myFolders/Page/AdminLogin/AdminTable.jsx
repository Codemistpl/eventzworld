import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Api_url } from "../../../../constant";
import "./AdminTable.css"
// import { useNavigate } from "react";
// import AdminDashboard from '../../Page/AdmunDashboard/AdminDashboard';

const Card = ({ item }) => {
  return (
    <div className="card">
    
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
  const [items, setItems] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [tableData, setTableData] = useState()
  const [selectedData, setSelectedData] = useState([]);
  const [aprooveId, setaprooveid] = useState();
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [totalPages, setTotalPages] = useState(1);
  // const navigate = useNavigate();

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
          if (selectedItems.some((selectedItem) => selectedItem.id === item.id)) {
            return { ...item, approved: true, selected: false };
          }
          return item;
        })
      );
      
    } catch (error) {
      console.error("Error occurred during approval:", error.message);
      
      // window.alert("An error occurred during approval");
    }
  }
  
  


  const fetchData = async (page) => {
    try {
      const response = await fetch(`${Api_url}/create_post/getCreatePost?page=${page}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setItems(data.posts);
      setTotalPages(data.totalPages);
      console.log(data, "post");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);



  // useEffect(()=>{
    
  //   const  isLoggedIn = localStorage.getItem("isLoggedIn")
  //   if(! isLoggedIn) 
  //   {navigate("login")}
  //   else{
  //     console.log("log out")
  //   }
  //    })

  const handleEdit = (id) => {
    setaprooveid(id)

  }
  
  
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleNextPage = () => {
    handlePageChange(currentPage + 1);
  };

  const handlePrevPage = () => {
    handlePageChange(currentPage - 1);
  };

  const renderPagination = () => {
    const pagination = [];
    if (currentPage > 1) {
      pagination.push(<button key="prev" onClick={handlePrevPage}>&lt;</button>);
    }
    pagination.push(<span key="current">{currentPage}</span>);
    if (currentPage < totalPages) {
      pagination.push(<button key="next" onClick={handleNextPage}>&gt;</button>);
    }
    return pagination;
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
                {items?items.map((item, index) => (
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
                )):null}

              </tbody>
            </table>
          </div>
        </div>
      </div>
      <td>
    
      </td>
   

      <div className="pagination">
        {renderPagination()}
      </div>

      <td>

        
        <button onClick={approveData} className="" style={{marginTop:"20px",
         backgroundColor:"#1a73e8",
         color:"white",
         fontSize:"16px",
         fontFamily:"bold",
         alignItems:"center",
         textAlign:"center",
         justifyContent:"center"
         }}>Approve</button> 
      </td>

    </>
  );
};

export default AdminTable;

