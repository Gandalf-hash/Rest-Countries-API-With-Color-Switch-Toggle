import React from 'react'
import { HeaderText } from '../components/HeaderText'
import { ColorSwitchToggle } from '../components/ColorSwitchToggle'

function TopNavbar() {
  return (
    <div className="py-5 px-4 md:px-12 shadow-md dark:bg-lightBlue dark:text-white bg-white text-deepBlue dark:shadow-md">
    <div className="flex justify-between items-center">
      <HeaderText />
      <ColorSwitchToggle />
    </div>
  </div>
  )
}

export default TopNavbar
