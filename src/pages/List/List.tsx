import React, { useEffect, useState } from "react"
import { serverCall } from "../../services/ServerCall"
import { ListData } from "../../interfaces/ListData"
import ListItem from "./components/ListItem"
import { NavLink } from "react-router-dom"
import { fetchListData, selectList } from "../../stores/ListReducer"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

export default function List() {
  const list = useAppSelector(selectList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchListData())
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-row justify-center mt-12 gap-5 text-center items-center">
        <NavLink
          to="/"
          className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Back
        </NavLink>
        <p className="text-4xl font-bold italic">List of Elements</p>
      </div>
      <div className="flex flex-col items-center gap-8 h-5/6 mt-12 w-1/2">
        {list.status == "loading" ? (
          <span className="font-bold text-2xl italic">LOADING...</span>
        ) : (
          list.data.map((item) => <ListItem data={item} />)
        )}
      </div>
    </div>
  )
}
