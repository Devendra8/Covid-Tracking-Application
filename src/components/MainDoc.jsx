import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchOrders, FetchOrders1 } from "../Pages/FetchOrders";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";
import "../index.css";
import moment from "moment";
import ControllableStates from "../search";
import "./MainDoc.css";

const MainDoc = () => {
  const yesdate = moment().subtract(1, "days").format("M/D/YY");
  const dispatch = useDispatch();
  const cases = useSelector((state) => state.cases.cases);
  const todayCases = useSelector((state) => state.cases.todayCases);
  const deaths = useSelector((state) => state.cases.deaths);
  const todayDeaths = useSelector((state) => state.cases.todayDeaths);
  const recovered = useSelector((state) => state.cases.recovered);
  const todayRecovered = useSelector((state) => state.cases.todayRecovered);
  // const status = useSelector((state) => state.MainDoc.status);
  // const error = useSelector((state) => state.MainDoc.error);
  const Afghanistan = useSelector((state) => state.Afghanistan);
  const Albania = useSelector((state) => state.Albania);
  const Algeria = useSelector((state) => state.Algeria);
  const Andorra = useSelector((state) => state.Andorra);
  const Angola = useSelector((state) => state.Angola);
  const Anguilla = useSelector((state) => state.Anguilla);
  const Antigua = useSelector((state) => state.Antigua);
  const Argentina = useSelector((state) => state.Argentina);
  const Armenia = useSelector((state) => state.Armenia);
  const Aruba = useSelector((state) => state.Aruba);
  const Australia = useSelector((state) => state.Australia);
  const Austria = useSelector((state) => state.Austria);
  const Azerbaijan = useSelector((state) => state.Azerbaijan);
  const Bahamas = useSelector((state) => state.Bahamas);
  const Bahrain = useSelector((state) => state.Bahrain);
  const Bangladesh = useSelector((state) => state.Bangladesh);
  const Barbados = useSelector((state) => state.Anguilla);
  const Belarus = useSelector((state) => state.Belarus);
  const Belgium = useSelector((state) => state.Belgium);
  const Belize = useSelector((state) => state.Belize);
  const Benin = useSelector((state) => state.Benin);
  const Bermuda = useSelector((state) => state.Bermuda);
  const Bhutan = useSelector((state) => state.Bhutan);
  const Bolivia = useSelector((state) => state.Bolivia);
  const Caribbean = useSelector((state) => state.Caribbean);
  const Bosnia = useSelector((state) => state.Bosnia);
  const Botswana = useSelector((state) => state.Botswana);
  const Brazil = useSelector((state) => state.Brazil);
  const Virgin = useSelector((state) => state.Virgin);
  const Brunei = useSelector((state) => state.Brunei);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Belarus = useSelector((state) => state.Belarus);
  // const Anguilla = useSelector((state) => state.Anguilla);
  // const Anguilla = useSelector((state) => state.Anguilla);
  // const Anguilla = useSelector((state) => state.Anguilla);

  const covidImg = useSelector((state) => state.covidImg);
  console.log(covidImg);
  const data = [];
  //   useEffect(() => {
  //     dispatch(FetchOrders1());
  //   }, [dispatch]);

  const changename = () => {
    dispatch(FetchOrders());
    dispatch(FetchOrders1());
    // dispatch(FetchOrders2());
  };

  return (
    <>
      <div>
        <h1> Covid-19 Worldwide Statistics</h1>
        <table id="customers">
          <tr>
            <th>Total Cases:</th>
            <th>Today Cases:</th>
            <th>Death:</th>
            <th>Today Deaths : </th>
            <th>Recovered : </th>
            <th>Today Recovered : </th>
          </tr>
          <tr>
            <td> {cases}</td>
            <td> {todayCases}</td>
            <td> {deaths}</td>
            <td> {todayDeaths}</td>
            <td> {recovered}</td>
            <td> {todayRecovered}</td>
          </tr>
        </table>
        <button onClick={() => changename()}> Update Details</button>

        <div>
          <h1> Covid-19 Vaccine Worldwide Statistics</h1>
          <table id="customers">
            <tr className="table-heading1">
              <th>Country</th>
              <td>
                {" "}
                Total Vaccines<br></br> <strong>Date: {yesdate}</strong>
              </td>
            </tr>
            <tr>
              <th>Afghanistan :</th>
              <td> {Afghanistan}</td>
            </tr>
            <tr>
              <th>Albania :</th>
              <td> {Albania}</td>
            </tr>
            <tr>
              <th>Algeria :</th>
              <td> {Algeria} </td>
            </tr>
            <tr>
              <th>Andorra : </th>
              <td> {Andorra} </td>
            </tr>
            <tr>
              <th>Angola : </th>
              <td> {Angola}</td>
            </tr>
            <tr>
              <th>Anguilla : </th>
              <td> {Anguilla}</td>
            </tr>
            <tr>
              <th>Antigua : </th>
              <td> {Antigua}</td>
            </tr>
            <tr>
              <th>Argentina : </th>
              <td> {Argentina}</td>
            </tr>
            <tr>
              <th>Armenia : </th>
              <td> {Armenia}</td>
            </tr>
            <tr>
              <th>Aruba : </th>
              <td> {Aruba}</td>
            </tr>
            <tr>
              <th>Australia : </th>
              <td> {Australia}</td>
            </tr>
            <tr>
              <th>Austria : </th>
              <td> {Austria}</td>
            </tr>
            <tr>
              <th>Azerbaijan : </th>
              <td> {Azerbaijan}</td>
            </tr>
            <tr>
              <th>Bahamas : </th>
              <td> {Bahamas}</td>
            </tr>
            <tr>
              <th>Bahrain : </th>
              <td> {Bahrain}</td>
            </tr>
            <tr>
              <th>Bangladesh : </th>
              <td> {Bangladesh}</td>
            </tr>
            <tr>
              <th>Barbados : </th>
              <td> {Barbados}</td>
            </tr>
            <tr>
              <th>Belarus : </th>
              <td> {Belarus}</td>
            </tr>
            <tr>
              <th>Belgium : </th>
              <td> {Belgium}</td>
            </tr>
            <tr>
              <th>Belize : </th>
              <td> {Belize}</td>
            </tr>
            <tr>
              <th>Benin : </th>
              <td> {Benin}</td>
            </tr>
            <tr>
              <th>Bermuda : </th>
              <td> {Bermuda}</td>
            </tr>
            <tr>
              <th>Bhutan : </th>
              <td> {Bhutan}</td>
            </tr>
            <tr>
              <th>Bolivia : </th>
              <td> {Bolivia}</td>
            </tr>
            <tr>
              <th>Caribbean : </th>
              <td> {Caribbean}</td>
            </tr>
            <tr>
              <th>Bosnia : </th>
              <td> {Bosnia}</td>
            </tr>
            <tr>
              <th>Botswana : </th>
              <td> {Botswana}</td>
            </tr>
            <tr>
              <th>Brazil : </th>
              <td> {Brazil}</td>
            </tr>
            <tr>
              <th>Virgin : </th>
              <td> {Virgin}</td>
            </tr>
            <tr>
              <th>Brunei : </th>
              <td> {Brunei}</td>
            </tr>
          </table>
          <ControllableStates />
        </div>
        <div id="countryImg"></div>
      </div>
    </>
  );
};

export default MainDoc;
