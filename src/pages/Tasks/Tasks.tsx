import { useState } from "react"
import { selectTask } from "../../stores/TasksReducer"
import TaskDescription from "./components/TaskDescription"
import AddTaskModal from "./components/AddTaskModal"
import { NavLink } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"

export default function Tasks() {
  const tasks = useAppSelector(selectTask)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-row justify-center mt-12 gap-5 text-center items-center">
          <NavLink
            to="/"
            className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Back
          </NavLink>
          <p className="text-4xl font-bold italic">List of Tasks</p>
          <button
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            + Add Task
          </button>
        </div>
        <div className="flex flex-col items-center gap-8 h-5/6 mt-12 w-1/2">
          {tasks.map((task) => (
            <TaskDescription data={task} />
          ))}
        </div>
      </div>
      {showModal ? <AddTaskModal setShowModal={setShowModal} /> : null}
    </>
  )
}
