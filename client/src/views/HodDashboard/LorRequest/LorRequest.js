import React, { useState } from "react";
import CardTable from "../../../components/Cards/CardTable";

function LorRequest() {
  let i = 0;
  let stateInit = {};
  // Consider values from DB
  let inputValues = ["Change in line 22...", "Change in line 23...", "N/A"];
  inputValues.forEach((value, index) => {
    stateInit[`i${index}`] = value;
  });

  const [state, setState] = useState(stateInit);
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const header = [
    "Request Id",
    "Student Id",
    "Student Name",
    "Status",
    "Remarks",
    "View/Download LOR",
  ];

  const body = [
    [
      "Req 1",
      "17CE001",
      "Navdeep Dadhania",
      "Verified by Counsellor",
      <>
        <input
          value={state[`i${i}`]}
          name={`i${i++}`}
          className="border-none outline-none h-10"
          onChange={handleChange}
        />
        <br />
        <input type="file" />
      </>,
      <a
        className="text-blue-500 underline"
        target="_blank"
        href="/redirect/https://www.google.com"
      >
        View/Download
      </a>,
    ],
    [
      "Req 2",
      "17CE002",
      "Nihal Shaikh",
      "Verified by TPR",
      <>
        <input
          value={state[`i${i}`]}
          name={`i${i++}`}
          className="border-none outline-none h-10"
          onChange={handleChange}
        />
        <br />
        <input type="file" />
      </>,
      <a
        className="text-blue-500 underline"
        target="_blank"
        href="/redirect/https://www.google.com"
      >
        View/Download
      </a>,
    ],
    [
      "Req 3",
      "17CE003",
      "Akshit Soneji",
      "Verified by Counsellor, TPR",
      <>
        <input
          value={state[`i${i}`]}
          name={`i${i++}`}
          className="border-none outline-none h-10"
          onChange={handleChange}
        />
        <br />
        <input type="file" />
      </>,
      <a
        className="text-blue-500 underline"
        target="_blank"
        href="/redirect/https://www.google.com"
      >
        View/Download
      </a>,
    ],
  ];
  return <CardTable header={header} body={body} />;
}

export default LorRequest;
