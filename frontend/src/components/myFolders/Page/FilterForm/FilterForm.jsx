import { Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import { useState, useEffect } from "react";
import Searchbox from "../pages/Search";
import { getFilteredPlayers } from "../Services/playerService";

const FilterForm = ({
  setMarker,
  handleInput,
  inputs,
  setPlayers,
  setInputs,
}) => {
  const SPORTS = [
    { label: "Cricket", value: "option_1" },
    { label: "Football", value: "option_2" },
    { label: "Basketball", value: "option_3" },
    { label: "TENNIS", value: "option_4" },
    { label: "VOLLYBALL", value: "option_5" },
  ];

  const DAYS = [
    { label: "Monday", value: "option_1" },
    { label: "Tuesday", value: "option_2" },
    { label: "Wednessday", value: "option_3" },
    { label: "Thursday", value: "option_4" },
    { label: "Friday", value: "option_1" },
    { label: "Satarday", value: "option_2" },
    { label: "Sunday", value: "option_3" },
  ];

  const validationSchema = Yup.object().shape({
    sports: Yup.string().required(),
    day: Yup.string().required(),
    time: Yup.string().required(),
    location: Yup.string().required(),
  });

  const initialValues = {
    sports: "",
    time: "",
    day: "",
    location: { city: "" },
  };

  const [valueSports, setvalueSports] = useState("");
  const [valueDays, setvalueDays] = useState("");

  console.log(inputs);

  const handleOnchangeSports = (val) => {
    setvalueSports(val);
  };
  const handleOnchangeDays = (val) => {
    setvalueDays(val);
  };
  useEffect(() => {
    getFilteredPlayers();
    let a;
    let current = [];
    current.push();
  }, []);

  const [map, setMap] = useState(null);

  const getFilteredPlayers = async () => {
    if (inputs.selectedLocation) setMarker(inputs.selectedLocation);
    let bodyData = { ...inputs };
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    };
    const response = await fetch(
      "http://localhost:4112/players/getFilteredPlayers",
      options
    ).then((res) => res.json().then((jsonRes) => jsonRes));
    console.log("RES", response);
    if (response && response.filteredPlayer)
      setPlayers(response.filteredPlayer);
    else setPlayers([]);
  };

  return (
    <>
      <div style={{}}>
        <div className="" style={{ width: "87%" }}>
          <label style={{ display: "flex" }}>Time</label>
          <select
            onChange={handleInput}
            className="form-select"
            aria-label="Default select example"
            name="sport"
          >
            <option selected style={{ paddingTop: "1rem" }}>
              Open this select Sport
            </option>
            {SPORTS.map((row, index) => {
              return (
                <option key={index} value={row.label}>
                  {row.label}
                </option>
              );
            })}
          </select>

          {/* {error ? <ErrorMessage /> : null} */}
        </div>
        <div className="" style={{ width: "87%" }}>
          <label style={{ display: "flex" }}>Day</label>
          <select
            name="day"
            className="form-select"
            aria-label="Default select example"
            onChange={handleInput}
          >
            <option selected>Open this select Day</option>
            {DAYS.map((row, index) => {
              return (
                <option key={index} value={row.label}>
                  {row.label}
                </option>
              );
            })}
          </select>

          {/* <ErrorMessage /> */}
        </div>
        <div
          className="  "
          style={{
            width: "87%",
            display: "",
            justifyContent: "",
          }}
        >
          <label style={{ display: "flex" }}>From</label>
          <input
            name="from"
            onChange={handleInput}
            className="form-control"
            type="time"
          />
          {/* <ErrorMessage /> */}
        </div>
        <div className="" style={{ width: "87%" }}>
          <label style={{ display: "flex" }}>To</label>
          <input
            name="to"
            onChange={handleInput}
            className="form-control"
            type="time"
          />
          {/* <ErrorMessage /> */}
        </div>
        <div style={{ paddingRight: "1rem", paddingTop: "1rem" }}>
          {" "}
          Search Location
          <Searchbox
            setMarker={setMarker}
            handleInput={handleInput}
            setInputs={setInputs}
          />
        </div>
      </div>
      <div
        style={{
          paddingTop: "1rem",
          width: "",
          backgroundColor: "",
        }}
      >
        <Button
          variant="primary"
          type="submit"
          onClick={getFilteredPlayers}
          style={{ backgroundColor: "black", color: "white" }}
        >
          {" "}
          Submit
        </Button>
      </div>
    </>
  );
};

export default FilterForm;