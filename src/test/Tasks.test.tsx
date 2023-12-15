import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { Provider } from "react-redux"
import Tasks from "../pages/Tasks/Tasks"
import { store } from "../app/store"
import { MemoryRouter } from "react-router-dom"

vi.mock("../app/hooks", () => ({
  useAppSelector: vi.fn(),
  useAppDispatch: vi.fn(),
}))

describe("Tasks Component", () => {
  it("renders tasks correctly", () => {
    const mockTasks = [
      { id: 1, title: "Task 1" },
      { id: 2, title: "Task 2" },
    ]

    ;(useAppSelector as jest.Mock).mockReturnValue(mockTasks)
    ;(useAppDispatch as jest.Mock).mockReturnValue(vi.fn())

    render(
      <MemoryRouter>
        <Provider store={store}>
          <Tasks />
        </Provider>
      </MemoryRouter>,
    )

    expect(screen.getByText("Task 1")).toBeInTheDocument()
    expect(screen.getByText("Task 2")).toBeInTheDocument()
  })

  it("shows the Add Task button and modal", () => {
    ;(useAppSelector as jest.Mock).mockReturnValue([])
    ;(useAppDispatch as jest.Mock).mockReturnValue(vi.fn())

    render(
      <MemoryRouter>
        <Provider store={store}>
          <Tasks />
        </Provider>
      </MemoryRouter>,
    )

    expect(screen.getByText("+ Add Task")).toBeInTheDocument()

    fireEvent.click(screen.getByText("+ Add Task"))

    expect(screen.getByText("Title")).toBeInTheDocument()
  })
})
