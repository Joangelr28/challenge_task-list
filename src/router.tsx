import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import List from "./pages/List/List"
import Tasks from "./pages/Tasks/Tasks"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
])

export const Router = () => {
  return (
    <RouterProvider
      router={routes}
      fallbackElement={
        <h1 className="text-2xl font-bold italic">Loading...</h1>
      }
    />
  )
}
