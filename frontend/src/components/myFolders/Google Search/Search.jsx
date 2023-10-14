// import Autocomplete from "react-google-autocomplete";
// import React, { useState } from "react";
// function Search({onLocationChange}) {
//   return (
//   <>
//       <Autocomplete
//          style={{width:"85%", height:"46px",marginTop:"10px", marginLeft:"18px", marginBottom:"20px", paddingRight:"20px", padding: "12px",
//          border:"1px solid white",
//           resize: "vertical",}}
//           apiKey={"AIzaSyAU0DASyH7nq0ypKB-en5f7TK2dDPvWpJI"}
//           onPlaceSelected={(place)=>{
//             onLocationChange(place);
//           }}
//          />
//           <div>
//       </div>
//         </>
//   );
// }


// export default Search;
import React from "react";
import Autocomplete from "react-google-autocomplete";

function Search({ onLocationChange }) {
  return (
    <>
      <Autocomplete
        style={{
          width: "85%",
          height: "46px",
          marginTop: "0px",
          marginLeft: "18px",
          marginBottom: "20px",
          paddingRight: "20px",
          padding: "12px",
          border: "1px solid white",
          resize: "vertical",
        }}
        apiKey={"AIzaSyAn4eeaT18hannefB6jKR35GmY7iVdDCUs"}
        // onPlaceSelected={place => {
        //   onLocationChange(place);
        //   console.log("PlaceSelected")
        // }}
        onPlaceSelected={place => {
          if (place && place.geometry) {
            onLocationChange(place);
            console.log("PlaceSelected")
          } else {
            console.error("Invalid place object:", place);
          }
        }}
        
      />
    </>
  );
}

export default Search;



