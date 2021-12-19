import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { FetchOrders, FetchOrders1, FetchOrders2 } from "./FetchOrders";
import moment from "moment";

export const initialState = {
  cases: "",
  Afghanistan: "",
  Albania: "",
  Algeria: "",
  Andorra: "",
  Angola: "",
  Anguilla: "",
  Antigua: "",
  Argentina: "",
  Armenia: "",
  Aruba: "",
  Australia: "",
  Austria: "",
  Azerbaijan: "",
  Bahamas: "",
  Bahrain: "",
  Bangladesh: "",
  Barbados: "",
  Belarus: "",
  Belgium: "",
  Belize: "",
  Benin: "",
  Bermuda: "",
  Bhutan: "",
  Bolivia: "",
  Caribbean: "",
  Bosnia: "",
  Botswana: "",
  Brazil: "",
  Virgin: "",
  Brunei: "",
  Bulgaria: "",
  Burkina: "",
  Cambodia: "",
  Cameroon: "",
  Canada: "",
  Cabo: "",
  Cayman: "",
  Central: "",
  Chad: "",
  Chile: "",
  China: "",
  Colombia: "",
  Comoros: "",
  Congo: "",
  Cook: "",
  Costa: "",
  Côte: "",
  Croatia: "",
  Cuba: "",
  Curaçao: "",
  Cyprus: "",
  Czechia: "",
  DRC: "",
  Denmark: "",
  Djibouti: "",
  Dominica: "",
  Dominican: "",
  Ecuador: "",
  Egypt: "",
  Salvador: "",
  Guinea: "",
  Estonia: "",
  Swaziland: "",
  Ethiopia: "",
  Faroe: "",
  Falkland: "",
  Fiji: "",
  Finland: "",
  France: "",
  Polynesia: "",
  Gabon: "",
  Gambia: "",
  Georgia: "",
  Germany: "",
  Ghana: "",
  Gibraltar: "",
  Greece: "",
  Greenland: "",
  Grenada: "",
  Guatemala: "",
  Guernsey: "",
  covidImg: "",
  status: false,
  error: "",
  status1: false,
  error1: "",
  status2: false,
  error2: "",
};

const yesdate = moment().subtract(1, "days").format("M/D/YY");

const UserReducer = createSlice({
  name: "empty",
  initialState,
  reducers: {},
  extraReducers: {
    [FetchOrders.pending]: (state) => {
      state.status = "loading";
      state.name = "loading";
    },

    [FetchOrders.fulfilled]: (state, action) => {
      state.status = "suceeded";
      state.cases = action.payload;
    },

    [FetchOrders.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },

    //Vaccine Reducers
    [FetchOrders1.pending]: (state) => {
      state.status1 = "loading";
      state.name1 = "loading";
    },

    [FetchOrders1.fulfilled]: (state, action) => {
      state.status1 = "suceeded";
      state.Afghanistan = action.payload[0].timeline[yesdate];
      state.Albania = action.payload[1].timeline[yesdate];
      state.Algeria = action.payload[2].timeline[yesdate];
      state.Andorra = action.payload[3].timeline[yesdate];
      state.Angola = action.payload[4].timeline[yesdate];
      state.Anguilla = action.payload[5].timeline[yesdate];
      state.Antigua = action.payload[6].timeline[yesdate];
      state.Argentina = action.payload[7].timeline[yesdate];
      state.Armenia = action.payload[8].timeline[yesdate];
      state.Aruba = action.payload[9].timeline[yesdate];
      state.Australia = action.payload[10].timeline[yesdate];
      state.Austria = action.payload[11].timeline[yesdate];
      state.Azerbaijan = action.payload[12].timeline[yesdate];
      state.Bahamas = action.payload[13].timeline[yesdate];
      state.Bahrain = action.payload[14].timeline[yesdate];
      state.Bangladesh = action.payload[15].timeline[yesdate];
      state.Barbados = action.payload[16].timeline[yesdate];
      state.Belarus = action.payload[17].timeline[yesdate];
      state.Belgium = action.payload[18].timeline[yesdate];
      state.Belize = action.payload[19].timeline[yesdate];
      state.Benin = action.payload[20].timeline[yesdate];
      state.Bermuda = action.payload[21].timeline[yesdate];
      state.Bhutan = action.payload[22].timeline[yesdate];
      state.Bolivia = action.payload[23].timeline[yesdate];
      state.Caribbean = action.payload[24].timeline[yesdate];
      state.Bosnia = action.payload[25].timeline[yesdate];
      state.Botswana = action.payload[26].timeline[yesdate];
      state.Brazil = action.payload[27].timeline[yesdate];
      state.Virgin = action.payload[28].timeline[yesdate];
      state.Brunei = action.payload[29].timeline[yesdate];
      state.Bulgaria = action.payload[30].timeline[yesdate];
      state.Burkina = action.payload[31].timeline[yesdate];
      state.Cambodia = action.payload[32].timeline[yesdate];
      state.Cameroon = action.payload[33].timeline[yesdate];
      state.Canada = action.payload[34].timeline[yesdate];
      state.Cabo = action.payload[35].timeline[yesdate];
      state.Cayman = action.payload[36].timeline[yesdate];
      state.Central = action.payload[37].timeline[yesdate];
      state.Chad = action.payload[38].timeline[yesdate];
      state.Chile = action.payload[39].timeline[yesdate];
      state.China = action.payload[40].timeline[yesdate];
      state.Colombia = action.payload[41].timeline[yesdate];
      state.Comoros = action.payload[42].timeline[yesdate];
      state.Congo = action.payload[43].timeline[yesdate];
      state.Cook = action.payload[44].timeline[yesdate];
      state.Costa = action.payload[45].timeline[yesdate];
      state.Côte = action.payload[46].timeline[yesdate];
      state.Croatia = action.payload[47].timeline[yesdate];
      state.Cuba = action.payload[48].timeline[yesdate];
      state.Curaçao = action.payload[49].timeline[yesdate];
      state.Cyprus = action.payload[50].timeline[yesdate];
      state.Czechia = action.payload[51].timeline[yesdate];
    },

    [FetchOrders1.rejected]: (state, action) => {
      state.status1 = "failed";
      state.error1 = action.error.message;
    },

    [FetchOrders2.pending]: (state) => {
      state.status2 = "loading";
    },

    [FetchOrders2.fulfilled]: (state, action) => {
      state.covidImg = action.payload;
      state.status2 = "failed";
    },

    [FetchOrders2.rejected]: (state, action) => {
      state.status = "failed";
      state.error2 = action.error.message;
    },
  },
});

export const FetchOrders3 = UserReducer.actions;

//export const {} = UserReducer.actions
export default UserReducer.reducer;
