import { useState } from "react"
import { selectTask } from "../../stores/TasksReducer"
import TaskDescription from "./components/TaskDescription"
import AddTaskModal from "./components/AddTaskModal"
import { NavLink } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import "./Tasks.scss"

export default function Tasks() {
  const tasks = useAppSelector(selectTask)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="tasks-content">
        <div className="tasks-title">
          <NavLink to="/" type="button">
            Back
          </NavLink>
          <p className="text-4xl font-bold italic">List of Tasks</p>
          <button onClick={() => setShowModal(true)}>+ Add Task</button>
        </div>
        <div className="tasks-render">
          {tasks.map((task) => (
            <TaskDescription data={task} key={task.title + 1} />
          ))}
        </div>
      </div>
      {showModal ? <AddTaskModal setShowModal={setShowModal} /> : null}
    </>
  )
}
