import React from "react"
import { NavLink } from "react-router-dom"

export default function Home() {
  const menuButtonClass =
    "rounded-xl shadow-md font-bold italic text-white text-xl py-2 px-5 bg-orange-400 hover:border-orange-400 hover:border-2 hover:bg-white hover:text-orange-400"
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <p className="text-4xl font-bold italic">Challenge Task-List</p>
      <div className="flex flex-row gap-24 mt-10">
        <NavLink to="/tasks" className={menuButtonClass}>
          TASK
        </NavLink>
        <NavLink to="/list" className={menuButtonClass}>
          LIST
        </NavLink>
      </div>
    </div>
  )
}
