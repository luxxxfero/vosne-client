import React from "react";
import Header from "../components/ui/header/header";
import Main from "../components/ui/main/main";
import Footer from "../components/ui/footer/footer";

type LDLayoutProps = {
  children: React.ReactNode
}

const LDLayout: React.FC<LDLayoutProps> = ({children}) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="mb-7 bg-white border-b border-gray-100">
        <div className="container">
          <Header />
        </div>
      </div>
      <div className="grow">
        <div className="container">
          <Main>
            {children}
          </Main>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="container">
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default LDLayout;