import React, { useEffect, useState } from "react"
import { serverCall } from "../../services/ServerCall"
import { ListData } from "../../interfaces/ListData"
import ListItem from "./components/ListItem"
import { NavLink } from "react-router-dom"
import { fetchListData, selectList } from "../../stores/ListReducer"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import "./List.scss"

export default function List() {
  const list = useAppSelector(selectList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchListData())
  }, [])

  return (
    <div className="list-content">
      <div className="list-title">
        <NavLink to="/" type="button">
          Back
        </NavLink>
        <p>List of Elements</p>
      </div>
      <div className="list-render">
        {list.status == "loading" ? (
          <span>LOADING...</span>
        ) : (
          list.data.map((item) => <ListItem data={item} />)
        )}
      </div>
    </div>
  )
}
