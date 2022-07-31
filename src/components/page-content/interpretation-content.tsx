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
    <Section title={`К чему сн${getLetter(interpretations[0].title)}тся ${interpretations[0].title}`}>
      <ul className="">
        {titleEl}
      </ul>
    </Section>
  )
}


export default InterpretationContent;