import React from "react";
import {INTERPRETATIONS, PATHS} from "../../types";
import Section from "../ui/section/section";
import {getLetter} from "../../utils/get-letter";
import Link from "next/link";

type InterpretationContentProps = {
  interpretations: INTERPRETATIONS,
}

const InterpretationContent: React.FC<InterpretationContentProps> = ({interpretations}) => {

  const titleEl = interpretations.map((it, idx) => {
    return (
      <li className="bg-white mb-5 p-4 rounded" key={it._id}>
        <h3 className="uppercase text-base font-medium mb-3">{it.dreamBookName}</h3>
        <ul>
          {it.interpretations.map((it, idx) => {
            return (
              <li className="mb-2" key={idx}>
                <p>{it}</p>
              </li>
            )
          })}
        </ul>
      </li>
    )
  })

  return (
    <>
      <div className="mb-5">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href={PATHS.HOME}>
                <a
                   className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Главная
                </a>
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"></path>
                </svg>
                <Link href={`${PATHS.LETTER}/${interpretations[0].letter}`}>
                  <a
                     className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">{interpretations[0].letter}</a>
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"></path>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{interpretations[0].title}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <Section title={`К чему сн${getLetter(interpretations[0].title)}тся ${interpretations[0].title}`}>
        <ul className="">
          {titleEl}
        </ul>
      </Section>
    </>
  )
}


export default InterpretationContent;