import React from "react";
import {abc} from "../../../constants";
import Link from "next/link";
import {PATHS} from "../../../types";

type LetterPanelProps = {}

const LetterPanel: React.FC<LetterPanelProps> = () => {
  return (
    <section>
      <ul className="grid grid-cols-fluid gap-1 ">
        {abc.map((letter, idx) => {
          return (
            <li className="rounded border border-blue-400 w-7 h-7" key={idx}>
              <Link href={`${PATHS.LETTER}/${letter}`}>
                <a className=" transition hover:bg-blue-600 hover:text-white w-full h-full flex items-center justify-center">
                  {letter}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default LetterPanel;