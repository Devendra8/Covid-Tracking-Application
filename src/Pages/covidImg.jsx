import React from "react";

export default function covidImg(value) {
  let graph = "https://corona.dnsforfamily.com/graph.png?c=" + value;
  return (
    <div>
      <img src={graph} alt="" />)
    </div>
  );
}
