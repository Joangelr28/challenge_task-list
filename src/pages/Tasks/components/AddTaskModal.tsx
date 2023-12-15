import { useState } from "react"
import { addTask } from "../../../stores/TasksReducer"
import { useAppDispatch } from "../../../app/hooks"
import "./AddTaskModal.scss"

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
      <div className="modal-content">
        <div className="relative-content">
          {/*content*/}
          <div className="card-content">
            {/*header*/}
            <div className="header-modal">
              <h3>Add new Task</h3>
              <button onClick={() => props.setShowModal(false)}>
                <span>×</span>
              </button>
            </div>
            {/*body*/}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                addNewTask()
              }}
            >
              <div className="body-modal">
                <div className="body-cont">
                  <label>Title</label>
                  <input
                    type="text"
                    value={form.title}
                    className="body-cont-inp"
                    onChange={(e) => {
                      setForm({ ...form, title: e.target.value })
                    }}
                    placeholder="Title here..."
                  />
                </div>
                <div className="body-cont">
                  <label>Description</label>
                  <textarea
                    value={form.description}
                    className="body-cont-inp"
                    onChange={(e) => {
                      setForm({ ...form, description: e.target.value })
                    }}
                    placeholder="Type your description here..."
                    cols={100}
                    rows={4}
                  />
                </div>
              </div>
              {errorForm && (
                <div>
                  <span>ERROR !! Please fill all fields!</span>
                </div>
              )}
              {/*footer*/}
              <div className="footer-modal">
                <button
                  className="close-btn"
                  type="button"
                  onClick={() => props.setShowModal(false)}
                >
                  Close
                </button>
                <button className="add-btn" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-modal"></div>
    </>
  )
}
