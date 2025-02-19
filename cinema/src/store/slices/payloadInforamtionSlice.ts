import { createSlice } from "@reduxjs/toolkit";

import { order } from "@/@types/interfacesFilms";

interface paymentState {
    orderObject: order | null;
}

const initialState : paymentState = {
    orderObject: null,
}

const payloadInformationSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        loadDatas: (state, action) => {
            state.orderObject = action.payload;
        },
        delDatas: (state) => {
            state.orderObject = null
        }
    }
})

export const { loadDatas, delDatas } = payloadInformationSlice.actions;

export default payloadInformationSlice.reducer;