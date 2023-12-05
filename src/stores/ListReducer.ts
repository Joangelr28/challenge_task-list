// Reducer.ts

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../app/store"
import { ListData } from "../interfaces/ListData"
import { serverCall } from "../services/ServerCall"

export interface ListState {
  data: ListData[]
  status: "idle" | "loading" | "failed"
}

const initialState: ListState = {
  data: [],
  status: "idle",
}

export const fetchListData = createAsyncThunk(
  "list/fetchListData",
  async () => {
    const response = await serverCall({
      url: "https://6172cfe5110a740017222e2b.mockapi.io/elements",
    })
    // The value we return becomes the `fulfilled` action payload
    return response
  },
)

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchListData.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchListData.fulfilled, (state, action) => {
        state.status = "idle"
        state.data = action.payload
      })
      .addCase(fetchListData.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const selectList = (state: RootState) => state.list

export default listSlice.reducer
