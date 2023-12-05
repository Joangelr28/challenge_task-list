import React from "react"
import { TaskData } from "../../../interfaces/TaskData"

interface TaskDescriptionProps {
  data: TaskData
}

export default function TaskDescription(props: TaskDescriptionProps) {
  const { data } = props
  return (
    <div
      className="flex flex-col  py-1 px-6 gap-1 border-2 w-full"
      key={data.title + data.description}
    >
      <p className="font-bold italic text-2xl">{data.title}</p>
      <span>{data.description}</span>
    </div>
  )
}
