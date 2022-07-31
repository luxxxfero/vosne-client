import React from "react";

type FooterProps = {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={"p-2 flex flex-col sm:flex-row gap-y-2 items-center" +
      " justify-center"}>
      <div className="flex items-center justify-center gap-x-2">
        <span className="text-xs text-white">
          По всем вопросам - email:
        </span>
        <a className="text-xs text-white" href="mailto:vosne.rf@yandex.ru">vosne.rf@yandex.ru</a>
      </div>
    </footer>
  )
}

export default Footer