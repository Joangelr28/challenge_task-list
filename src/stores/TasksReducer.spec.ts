import TasksReducer, { addTask } from "./TasksReducer"

describe("taskReducer", () => {
  it("should add a task to the state", () => {
    const initialState = {
      data: [],
    }

    const mockTask = { id: 1, title: "Task 1", description: "Description 1" }
    const action = addTask(mockTask)
    const state = TasksReducer(initialState, action)

    expect(state.data).toHaveLength(1)
    expect(state.data[0]).toEqual(mockTask)
  })

  it("should add multiple tasks to the state", () => {
    const initialState = {
      data: [],
    }

    const mockTasks = [
      { id: 1, title: "Task 1", description: "Description 1" },
      { id: 2, title: "Task 2", description: "Description 2" },
    ]

    const action1 = addTask(mockTasks[0])
    const state1 = TasksReducer(initialState, action1)

    const action2 = addTask(mockTasks[1])
    const state2 = TasksReducer(state1, action2)

    expect(state2.data).toHaveLength(2)
    expect(state2.data).toEqual(expect.arrayContaining(mockTasks))
  })

  // Add more test cases to cover different scenarios if needed
})
