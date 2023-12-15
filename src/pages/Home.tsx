import { NavLink } from "react-router-dom"
import "./Home.scss"

export default function Home() {
  return (
    <div className="main-content">
      <p>Challenge Task-List</p>
      <div className="flex flex-row gap-24 mt-10">
        <NavLink to="/tasks">TASK</NavLink>
        <NavLink to="/list">LIST</NavLink>
      </div>
    </div>
  )
}
