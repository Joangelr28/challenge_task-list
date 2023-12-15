import React from "react"
import { TaskData } from "../../../interfaces/TaskData"
import "./TaskDescription.scss"

interface TaskDescriptionProps {
  data: TaskData
}

export default function TaskDescription(props: TaskDescriptionProps) {
  const { data } = props
  return (
    <div className="description-content" key={data.title + data.description}>
      <p>{data.title}</p>
      <span>{data.description}</span>
    </div>
  )
}
