import React, {useState} from "react";
import {BREADCRUMBS_LIST, INTERPRETATIONS, PATHS} from "../../types";
import Section from "../ui/section/section";
import {getLetter} from "../../utils/get-letter";
import Breadcrumbs from "../ui/breadcrumbs/breadcrumbs";
import Link from "next/link";
import CaretRightIcon from "../icons/caret-right-icon";
import CaretDownIcon from "../icons/caret-down-icon";
import cn from "classnames";
import Image from "next/image";
import {getKeys} from "../../utils";

type InterpretationContentProps = {
  interpretations: INTERPRETATIONS,
}

const InterpretationContent: React.FC<InterpretationContentProps> = ({interpretations}) => {

  const [isOpenNavigation, setIsOpenNavigation] = useState<boolean>(false)

  const breadcrumbs: BREADCRUMBS_LIST = [
    {link: PATHS.HOME, title: "Главная"},
    {link: `${PATHS.LETTER}/${interpretations[0].letter}`, title: interpretations[0].letter},
    {link: `#`, title: interpretations[0].title},
  ]

  const keys = getKeys(interpretations[0].title, interpretations.length);

  const titleEl = interpretations.map((it, idx) => {
    return (
      <li id={it.dreamBookName} className="bg-white mb-5 p-4 rounded border border-gray-200" key={it._id}>
        <h3 className="uppercase text-blue-600 text-base font-medium mb-3">{it.dreamBookName}</h3>
        <h4 className="uppercase text-sm font-medium mb-3">{keys[idx]}</h4>
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
      <Breadcrumbs breadcrumbsList={breadcrumbs}/>
      <div className="bg-blue-100 py-3 px-4 mb-5 rounded border border-blue-200">
        <div onClick={() => setIsOpenNavigation(prevState => !prevState)} className="cursor-pointer flex items-center justify-between">
          <h3 className="text-sm font-medium uppercase">Навигация по сонникам</h3>
          {
            !isOpenNavigation &&
            <button>
              <CaretRightIcon className="w-5 h-5 fill-gray-800"/>
            </button>
          }
          {
            isOpenNavigation &&
            <button>
              <CaretDownIcon className="w-5 h-5 fill-gray-800"/>
            </button>
          }
        </div>
        <div className={cn("mt-3", {
          "hidden": !isOpenNavigation,
          "block": isOpenNavigation
        })}>
          <ul>
            {interpretations.map((it, idx) => {
              return (
                <li key={idx} className="mb-1 text-sm">
                  <span className="mr-1.5 text-green-600">{`${idx + 1}.`}</span>
                  <Link href={`${PATHS.INTERPRETATION}/${it.title}#${it.dreamBookName}`}>
                    <a className="underline">{`${it.dreamBookName.slice(0, 1).toUpperCase() + it.dreamBookName.slice(1)}`}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
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