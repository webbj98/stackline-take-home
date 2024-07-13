import { RootState } from ".";
import { fetchData } from "../http";
import { createSlice } from "@reduxjs/toolkit";

const data = fetchData();
const initialItemInfoState = {
    title: data.title,
    image: data.image,
    subtitle: data.subtitle,
    tags: data.tags
}

const itemInfoSlice = createSlice({
    name: 'itemInfo',
    initialState: initialItemInfoState,
    reducers: {

    }
})

export const selectItemInfo = (state: RootState) => state.itemInfo

export default itemInfoSlice.reducer;