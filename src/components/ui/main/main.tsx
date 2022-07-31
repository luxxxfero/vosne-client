import React, {DetailedHTMLProps, HTMLAttributes} from "react";

interface MainProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const Main: React.FC<MainProps> = ({children}) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default Main;