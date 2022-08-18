import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.redux";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;