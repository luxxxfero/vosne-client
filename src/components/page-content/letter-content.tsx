import React from "react";
import Link from "next/link";
import {PATHS, TITLES} from "../../types";
import Section from "../ui/section/section";

type LetterContentProps = {
  titles: TITLES,
  letter: string
}

const LetterContent: React.FC<LetterContentProps> = ({titles, letter}) => {

  const titleEl = titles.map((it, idx) => {

    return (
      <li className="" key={idx}>
        <Link href={`${PATHS.INTERPRETATION}/${it}`}>
          <a className="text-blue-600 break-all border h-full flex text-center items-center justify-center w-full p-3">{it}</a>
        </Link>
      </li>
    )
  })

  return (

    <Section title={`Толкование снов на букву ${letter}`}>
      <ul className="grid grid-cols-titles-fluid gap-3">
        {titleEl}
      </ul>
    </Section>
  )
}

export default LetterContent;