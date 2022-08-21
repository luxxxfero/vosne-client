import React from "react";
import Link from "next/link";
import {PATHS} from "../../../types";
import Logo from "../logo/logo";

type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={"flex justify-center items-center h-12"}>
      <div>
        <Link href={PATHS.HOME}>
          <a>
            <Logo/>
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Header;