import { createSlice } from "@reduxjs/toolkit";

const initialAdminState = {
    adminStatus: "",
};


const adminSlice = createSlice({
    name: "admin",
    initialState: initialAdminState,

    reducers: {
        loginOwner(state) {
            state.adminStatus = "Owner";
        },
        loginAdmin(state) {
            state.adminStatus = "Admin";
        },
        loginAdminWorker(state) {
            state.adminStatus = "AdminWorker";
        },
        logout(state) {
            state.adminStatus = "";
        },
    },
});



export const adminActions = adminSlice.actions;
export default adminSlice.reducer;