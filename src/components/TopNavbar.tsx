import React from "react";
import { ColorSwitchToggle } from "./ColorSwitchToggle";
import { HeaderText } from "./HeaderText";

export const TopNavbar = () => {
  return (
    <div className="py-5 px-4 lg:px-12 shadow-md dark:bg-lightBlue dark:text-white bg-white text-deepBlue dark:shadow-lg">
      <div className="flex justify-between items-center">
        <HeaderText />
        <ColorSwitchToggle />
      </div>
    </div>
  );
};
