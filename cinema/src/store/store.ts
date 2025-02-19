import { configureStore } from "@reduxjs/toolkit";

import payloadReducer from "./slices/payloadInforamtionSlice"


export const store = configureStore({
    reducer:{
        payment: payloadReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;