import React from "react";
import MoonIcon from "../../icons/moon-icon";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <MoonIcon className="w-6 fill-blue-600"/>
      <span className="text-xl uppercase font-bold">Восне</span>
    </div>
  )
}

export default Logo;