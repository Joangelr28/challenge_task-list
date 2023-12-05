import React from "react"
import { ListData } from "../../../interfaces/ListData"

interface ListItemProps {
  data: ListData
}

export default function ListItem(props: ListItemProps) {
  const { data } = props
  return (
    <div
      className="flex flex-row p-2 gap-3 border-2 w-full items-center"
      key={data.id}
    >
      <div>
        <img className="rounded-full w-16 h-16 bg-gray-400" src={data.avatar} />
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-xl italic">
          {data.id} - {data.name}
        </p>
        <span className=" text-md ">{data.createdAt}</span>
      </div>
    </div>
  )
}
