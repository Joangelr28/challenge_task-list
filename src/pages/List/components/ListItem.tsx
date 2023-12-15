import React from "react"
import { ListData } from "../../../interfaces/ListData"
import "./ListItem.scss"
interface ListItemProps {
  data: ListData
}

export default function ListItem(props: ListItemProps) {
  const { data } = props
  return (
    <div className="list-item" key={data.id}>
      <div>
        <img className="avatar" src={data.avatar} />
      </div>
      <div className="text-container">
        <p>
          {data.id} - {data.name}
        </p>
        <span>{data.createdAt}</span>
      </div>
    </div>
  )
}
