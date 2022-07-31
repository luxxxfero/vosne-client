import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import cn from "classnames";

interface SectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  title: string,
}

const Section: React.FC<SectionProps> = ({title, children, className, ...props}) => {
  return (
    <section className={cn(className, "mb-6")} {...props}>
      <h2 className="mb-5 text-2xl">{title}</h2>
      {children}
    </section>
  )
}

export default Section;