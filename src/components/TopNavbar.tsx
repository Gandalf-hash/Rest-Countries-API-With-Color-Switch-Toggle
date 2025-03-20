import React from "react";
import { ColorSwitchToggle } from "./ColorSwitchToggle";
import { HeaderText } from "./HeaderText";

export const TopNavbar = () => {
  return (
    <div className="py-5 px-4 lg:px-12 shadow-md dark:bg-darkBlue dark:text-white bg-white text-darkBlue dark:shadow-none">
      <div className="flex justify-between items-center">
        <HeaderText />
        <ColorSwitchToggle />
      </div>
    </div>
  );
};
