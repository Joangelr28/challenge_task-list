import ListReducer, { ListState, fetchListData } from "./ListReducer"

describe("listReducer", () => {
  const initialState: ListState = {
    data: [],
    status: "idle",
  }

  it("should handle fetchListData.pending action", () => {
    const action = fetchListData.pending
    const state = ListReducer(initialState, action)
    expect(state.status).toEqual("loading")
  })

  it("should handle fetchListData.fulfilled action", () => {
    const mockData = [
      { id: 1, name: "Element 1" },
      { id: 2, name: "Element 2" },
    ]
    const action = fetchListData.fulfilled(mockData, "mockData")
    const state = ListReducer(initialState, action)
    expect(state.status).toEqual("idle")
    expect(state.data).toEqual(mockData)
  })

  it("should handle fetchListData.rejected action", () => {
    const action = fetchListData.rejected
    const state = ListReducer(initialState, action)
    expect(state.status).toEqual("failed")
  })

  it("should return initial state for unknown action", () => {
    const unknownAction = { type: "UNKNOWN_ACTION" }
    const state = ListReducer(initialState, unknownAction)
    expect(state).toEqual(initialState)
  })
})
