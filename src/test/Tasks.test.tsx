// EL PROYECTO NO QUISO CORRER LAS PRUEBAS QUE ESTABAN HECHAS EN .TSX

/*import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { useAppSelector } from "../app/hooks"
import { Provider } from "react-redux"
import Tasks from "../pages/Tasks/Tasks"
import { store } from "../app/store"

jest.mock("../../app/hooks", () => ({
  useAppSelector: jest.fn(),
}))

describe("Tasks Component", () => {
  it("renders tasks correctly", () => {
    const mockTasks = [
      { id: 1, title: "Task 1" },
      { id: 2, title: "Task 2" },
    ]

    ;(useAppSelector as jest.Mock).mockReturnValue(mockTasks)

    render(
      <Provider store={store}>
        <Tasks />
      </Provider>,
    )

    expect(screen.getByText("Task 1")).toBeInTheDocument()
    expect(screen.getByText("Task 2")).toBeInTheDocument()
  })

  it("shows the Add Task button and modal", () => {
    ;(useAppSelector as jest.Mock).mockReturnValue([])

    render(
      <Provider store={store}>
        <Tasks />
      </Provider>,
    )

    expect(screen.getByText("+ Add Task")).toBeInTheDocument()

    expect(screen.queryByText("AddTaskModal")).toBeNull()

    fireEvent.click(screen.getByText("+ Add Task"))

    expect(screen.getByText("AddTaskModal")).toBeInTheDocument()
  })
})*/
