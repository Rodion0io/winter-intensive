import { createSlice } from "@reduxjs/toolkit";

interface authProps {
    isLoggedIn: boolean
}

const initialState: authProps = {
    isLoggedIn: false,
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        changeStatus: (state) => {
            state.isLoggedIn = !(state.isLoggedIn);
        }
    }
});


export const { changeStatus } = authSlice.actions;

export default authSlice.reducer;