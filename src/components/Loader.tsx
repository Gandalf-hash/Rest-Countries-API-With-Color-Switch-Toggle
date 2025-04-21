import React from 'react'
import { RiLoader2Fill } from 'react-icons/ri'

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <RiLoader2Fill className="animate-spin text-6xl text-gray-500" />
    </div>
  )
}

export default Loader
