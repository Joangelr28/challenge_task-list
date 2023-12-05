// Reducer.ts

import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TaskData } from "../interfaces/TaskData"
import { RootState } from "../app/store"

interface TaskState {
  data: TaskData[]
}

const initialState: TaskState = {
  data: [],
}

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskData>) => {
      state.data.push(action.payload)
    },
  },
})

export const selectTask = (state: RootState) => state.tasks.data

export const { addTask } = taskSlice.actions

export default taskSlice.reducer
