import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const value = "";

export const getPurchaseOrdersApiEndPoint =
  "https://disease.sh/v3/covid-19/all";

export const getPurchaseOrdersApiEndPoint1 =
  "https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1";

// export const getPurchaseOrdersApiEndPoint2 =
//   "https://corona.dnsforfamily.com/graph.png?c=";

export const FetchOrders = createAsyncThunk("fetchOrders", async () => {
  const response = await fetch(getPurchaseOrdersApiEndPoint);
  const res2 = await response.json();
  return res2;
  // res2[Math.floor(Math.random()*10)].name
});

export const FetchOrders1 = createAsyncThunk("fetchOrders1", async () => {
  const response = await fetch(getPurchaseOrdersApiEndPoint1);
  const res2 = await response.json();
  return res2;
  // res2[Math.floor(Math.random()*10)].name
});

export const FetchOrders2 = createAsyncThunk("fetchOrders2", async (value) => {
  const response = await fetch(
    "https://corona.dnsforfamily.com/graph.png?c=" + value,
    { mode: "no-cors" }
  );
  const res2 = await response.data;
  return res2;
});
