import { Provider } from "react-redux"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { render, screen } from "@testing-library/react"
import List from "../pages/List/List"
import { store } from "../app/store"
import { MemoryRouter } from "react-router-dom"
import { vi } from "vitest"

vi.mock("../app/hooks", () => ({
  useAppSelector: vi.fn(),
  useAppDispatch: vi.fn(),
}))

describe("List Component", () => {
  it("renders list elements correctly", async () => {
    const mockListData = [
      { id: 1, name: "Element 1" },
      { id: 2, name: "Element 2" },
    ]

    ;(useAppSelector as jest.Mock).mockReturnValue({
      data: mockListData,
      status: "idle",
    })
    ;(useAppDispatch as jest.Mock).mockReturnValue(vi.fn())

    render(
      <MemoryRouter>
        <Provider store={store}>
          <List />
        </Provider>
      </MemoryRouter>,
    )

    expect(screen.getAllByText("1 - Element 1")).toBeDefined()
    expect(screen.getByText("2 - Element 2")).toBeDefined()
  })

  it("renders loading state correctly", async () => {
    ;(useAppSelector as jest.Mock).mockReturnValue({
      data: [],
      status: "loading",
    })
    ;(useAppDispatch as jest.Mock).mockReturnValue(vi.fn())

    render(
      <MemoryRouter>
        <Provider store={store}>
          <List />
        </Provider>
      </MemoryRouter>,
    )

    expect(screen.getByText("LOADING...")).toBeDefined()
  })
})
