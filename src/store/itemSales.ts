import { RootState } from ".";
import { fetchData } from "../http";
import { createSlice } from "@reduxjs/toolkit";

const data = fetchData();
const initialSalesState = {
    sales: data.sales
}

const itemSalesSlice = createSlice({
    name: 'itemSales',
    initialState: initialSalesState,
    reducers: {
    }
})

export const selectItemSales = (state: RootState) => state.itemSales

export default itemSalesSlice.reducer;
