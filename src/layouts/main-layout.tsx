import React from "react";
import Header from "../components/ui/header/header";
import Main from "../components/ui/main/main";
import Footer from "../components/ui/footer/footer";
import LetterPanel from "../components/ui/letter-panel/letter-panel";
import Search from "../components/ui/search/search";

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="mb-7 bg-white border-b border-gray-100">
        <div className="container">
          <Header />
        </div>
      </div>
      <div className="mb-7">
        <div className="container">
          <LetterPanel/>
        </div>
      </div>
      <div className="mb-7">
        <div className="container">
          <Search/>
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

export default MainLayout;