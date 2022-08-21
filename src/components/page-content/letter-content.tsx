import React from "react";
import Link from "next/link";
import {BREADCRUMBS_LIST, PATHS, TITLES} from "../../types";
import Section from "../ui/section/section";
import Breadcrumbs from "../ui/breadcrumbs/breadcrumbs";

type LetterContentProps = {
  titles: TITLES,
  letter: string
}

const LetterContent: React.FC<LetterContentProps> = ({titles, letter}) => {

  const breadcrumbs: BREADCRUMBS_LIST = [
    {link: PATHS.HOME, title: "Главная"},
    {link: `#`, title: letter},
  ]

  const titleEl = titles.map((it, idx) => {
    return (
      <li className="text-center bg-white px-2 py-1 border border-gray-200 rounded truncate" key={idx}>
        <Link href={`${PATHS.INTERPRETATION}/${it}`}>
          <a>{it}</a>
        </Link>
      </li>
    )
  })

  return (
    <>
      <Breadcrumbs breadcrumbsList={breadcrumbs}/>
      <Section title={`Толкование снов на букву ${letter}`}>
        <ul className="grid grid-cols-titles-fluid gap-2">
          {titleEl}
        </ul>
      </Section>
    </>

  )
}

export default LetterContent;