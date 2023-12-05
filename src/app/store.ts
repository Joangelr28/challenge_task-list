import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import TasksReducer from "../stores/TasksReducer"
import ListReducer from "../stores/ListReducer"

export const store = configureStore({
  reducer: {
    tasks: TasksReducer,
    list: ListReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
