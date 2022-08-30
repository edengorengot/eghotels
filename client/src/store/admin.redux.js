import { createSlice } from "@reduxjs/toolkit";

const initialAdminState = {
    adminStatus: false,
};


const adminSlice = createSlice({
    name: "admin",
    initialState: initialAdminState,

    reducers: {
        login(state) {
            state.adminStatus = true;
        },
        logout(state) {
            state.adminStatus = false;
        },
    },
});



export const adminActions = adminSlice.actions;
export default adminSlice.reducer;