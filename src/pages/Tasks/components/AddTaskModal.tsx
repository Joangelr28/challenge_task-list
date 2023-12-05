import { useState } from "react"
import { addTask } from "../../../stores/TasksReducer"
import { useAppDispatch } from "../../../app/hooks"

interface AddTaskModalProps {
  setShowModal: (set: boolean) => void
}

export default function AddTaskModal(props: AddTaskModalProps) {
  const dispatch = useAppDispatch()
  const [form, setForm] = useState({ title: "", description: "" })
  const [errorForm, setErrorForm] = useState(false)

  const addNewTask = () => {
    if (form.description.trim() !== "" && form.title.trim() !== "") {
      dispatch(addTask(form))
      setForm({ title: "", description: "" })
      props.setShowModal(false)
    } else {
      setErrorForm(true)
    }
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add new Task</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => props.setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                addNewTask()
              }}
            >
              <div className="relative p-6 flex-auto">
                <div className="flex flex-col">
                  <label className="font-bold">Title</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => {
                      setForm({ ...form, title: e.target.value })
                    }}
                    className="rounded-lg border-2 border-gray-400 py-2 px-4"
                    placeholder="Title here..."
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label className="font-bold">Description</label>
                  <textarea
                    value={form.description}
                    onChange={(e) => {
                      setForm({ ...form, description: e.target.value })
                    }}
                    className="rounded-lg border-2 border-gray-400 py-2 px-4"
                    placeholder="Type your description here..."
                    cols={100}
                    rows={4}
                  />
                </div>
              </div>
              {errorForm && (
                <div className="flex justify-center items-center">
                  <span className="text-red-500 font-bold text-md">
                    ERROR !! Please fill all fields!
                  </span>
                </div>
              )}
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => props.setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
