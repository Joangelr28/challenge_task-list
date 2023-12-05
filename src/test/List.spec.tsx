// EL PROYECTO NO QUISO CORRER LAS PRUEBAS QUE ESTABAN HECHAS EN .TSX

/*import { Provider } from "react-redux"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { render, screen } from "@testing-library/react"
import List from "../pages/List/List"
import { store } from "../app/store"

jest.mock("../../app/hooks", () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(),
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
    ;(useAppDispatch as jest.Mock).mockReturnValue(jest.fn())

    render(
      <Provider store={store}>
        <List />
      </Provider>,
    )

    expect(screen.getAllByText("Element 1")).toBeInTheDocument()
    expect(screen.getByText("Element 2")).toBeInTheDocument()
  })

  it("renders loading state correctly", async () => {
    ;(useAppSelector as jest.Mock).mockReturnValue({
      data: [],
      status: "loading",
    })

    render(
      <Provider store={store}>
        <List />
      </Provider>,
    )

    expect(screen.getByText("LOADING...")).toBeInTheDocument()
  })
})
*/
