import { configureStore } from "@reduxjs/toolkit";
import itemInfoReducer from "./itemInfo";
import itemSalesReducer from "./itemSales";

export const store = configureStore({
    reducer: {
        itemSales: itemSalesReducer,
        itemInfo: itemInfoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>