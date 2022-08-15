import React, {useState} from "react";
import {BREADCRUMBS_LIST, PATHS} from "../../types";
import Section from "../ui/section/section";
import Breadcrumbs from "../ui/breadcrumbs/breadcrumbs";
import CaretRightIcon from "../icons/caret-right-icon";
import CaretDownIcon from "../icons/caret-down-icon";
import cn from "classnames";
import Link from "next/link";
import Telegram from "../ui/telegram/telegram";

type LDContentProps = {}

const LDContent: React.FC<LDContentProps> = ({}) => {

  const breadcrumbs: BREADCRUMBS_LIST = [
    {link: PATHS.HOME, title: "Главная"},
    {link: `#`, title: "Осознанные сны"},
  ]

  const [isOpenNavigation, setIsOpenNavigation] = useState<boolean>(true)

  return (
    <>
      <div className="mb-5">
        <Telegram/>
      </div>
      <Breadcrumbs breadcrumbsList={breadcrumbs}/>
      <Section title={`Осознанные сны`}>
        <div className="bg-blue-100 py-3 px-4 mb-5 rounded border border-blue-200">
          <div onClick={() => setIsOpenNavigation(prevState => !prevState)}
               className="cursor-pointer flex items-center justify-between">
            <h3 className="text-sm font-medium uppercase">Содержание</h3>
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
          <div className={cn("mt-2", {
            "hidden": !isOpenNavigation,
            "block": isOpenNavigation
          })}>
            <ul>
              <li className="mb-1 text-sm">
                <span className="mr-1.5 text-green-600">1)</span>
                <Link href={`${PATHS.LD}#1`}>
                  <a className="underline">Что такое осознанный сон</a>
                </Link>
              </li>
              <li className="mb-1 text-sm">
                <span className="mr-1.5 text-green-600">2)</span>
                <Link href={`${PATHS.LD}#2`}>
                  <a className="underline">Для чего нужен осознанный сон</a>
                </Link>
              </li>
              <li className="mb-1 text-sm">
                <span className="mr-1.5 text-green-600">3)</span>
                <Link href={`${PATHS.LD}#3`}>
                  <a className="underline">Чем опасны осознанные сновидения</a>
                </Link>
              </li>
              <li className="mb-1 text-sm">
                <span className="mr-1.5 text-green-600">4)</span>
                <Link href={`${PATHS.LD}#4`}>
                  <a className="underline">Как попасть в осознанный сон</a>
                </Link>
              </li>
              <li className="mb-1 text-sm">
                <span className="mr-1.5 text-green-600">5)</span>
                <Link href={`${PATHS.LD}#5`}>
                  <a className="underline">Советы новичкам</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="1" className="mb-5 bg-white p-4 rounded border border-gray-200">
          <h3 className="font-medium text-lg mb-3">Что такое осознанный сон</h3>
          <p>
            Осознанный сон (ОС, lucid dream) – это особое состояние сознания, в котором человек понимает что он спит,
            тем самым появляется способность в определенной мере контролировать свои сны.
          </p>
        </div>
        <div id="2" className="mb-5 bg-white p-4 rounded border border-gray-200">
          <h3 className="font-medium text-lg mb-3">Для чего нужен осознанный сон</h3>
          <p>
            В первую очередь это свобода. В обычном сне мы ввязываемся в сюжет и не осознаем, что это всего лишь сон,
            пока не проснемся. В осознанном сне человек действует так, как он сам того пожелает. Ваши действия
            ограниченны лишь вашей фантазией. Полеты, хождения сквозь стены, телепортация, управление погодой, занятие
            сексом, пробовать то, что вы не можете позволить себе в реальной жизни. Здесь вы становитесь тем, кем вы
            является на самом деле, без каких либо ограничений.
          </p>
        </div>
        <div id="3" className="mb-5 bg-white p-4 rounded border border-gray-200">
          <h3 className="font-medium text-lg mb-3">Чем опасны осознанные сновидения</h3>
          <p>
            Как таковой опасности они не несут, но ОСы это как инструмент в руках пользователя и в основном все зависит
            от того, как вы будете пользоваться этим инструментом. Если у вас есть проблемы с психическим здоровьем, вы
            очень впечатлительны, верите в различных демонов, а что еще хуже если вы их боитесь и боитесь быть
            одержимыми, то вам не стоит этим заниматься.
          </p>
        </div>
        <div id="4" className="mb-5 bg-white p-4 rounded border border-gray-200">
          <h3 className="font-medium text-lg mb-3">Как попасть в осознанный сон</h3>
          <p className="mb-3">
            <b>1)</b> Намерение. Самое важное из всех составляющих. Часто люди осознаются в первый же день после того
            как узнали об осознанном сновидении и захотели его испытать. Не переживайте, если этого не случилось, все
            обязательно получится.
          </p>
          <p className="mb-3">
            <b>2)</b> Энергия. Под энергией я не подразумеваю что-то абстрактное, а имею ввиду ваше физическое и
            психическое состояние. Чем оно лучше, тем больше шансов на успех.
          </p>
          <p className="mb-3">
            <b>3)</b> Память. Большинство людей не запоминают свои сны. Если вы думаете что вам ничего не снится, то
            скорее всего вы просто не помните этого. После пробуждения постарайтесь все таки вспомнить. Делать это нужно
            сразу, как только вы осознали момент пробуждения.
          </p>
          <p className="mb-3">
            <b>4)</b> Запись. В первое время записывайте все сны которые помните, даже незначительные. Это поможет
            развить вам сновидческую память.
          </p>
          <p className="mb-3">
            <b>5)</b> Картографирование. Помимо записей снов, развить сновидческую память вам поможет картографирование
            сновидений. Зарисуйте все что видели, деревья, дома, различные строения, дороги, реки, горы, и т.п.
            Определите местность где это все находится. В итоге у вас должна получиться целая карта ваших снов.
          </p>
          <p className="mb-3">
            <b>6)</b> Осознание. Жизнь многих людей проходит на автомате. Как говорится «Работа - Дом - Работа». А вы
            задумывались когда-нибудь о природе реальности? Может быть ваша жизнь это всего лишь сон? Почаще задавайтесь
            подобными вопросами.
          </p>
          <p className="mb-3">
            <b>7)</b> Внимание. Посмотрите во сне на свои руки. На первый взгляд это может показаться чем то нереальным,
            но вы попробуйте. Задайте себе установку посмотреть во сне на свои руки. Это позволит вам задействовать
            внимание сновидения.
          </p>
          <p>
            <b>8)</b> Досыпание. На мой взгляд самый проверенный и эффективный метод. Проснитесь на 2-3 часа раньше от того времени когда вы обычно просыпаетесь. Полежите, сходите в туалет, выпейте воды, старайтесь бодрствовать как минимум 30 минут. Далее снова засыпайте, намереваясь осознаться. Намерение не должно быть навязчивой мыслью. Просто дайте себе установку на то, чтобы осознать во сне, что вы спите. Если не получается уснуть, попробуйте почитать, либо включите какой нибудь фильм или аудиокнигу. После этого вас должно начать клонить в сон.
          </p>
        </div>
        <div id="5" className="mb-5 bg-white p-4 rounded border border-gray-200">
          <h3 className="font-medium text-lg mb-3">Советы новичкам</h3>
          <p>
            Не переживайте если у вас ничего не получается. Такое бывает. Если вы выполняли все пункты и ничего не
            вышло, то просто отпустите ситуацию. В один прекрасный день это все таки случится, будьте уверены. Если вы
            впервые осознались во сне, то это вызовет у вас кучу эмоций, из-за чего вас может сразу выкинуть от туда.
            Сохраняйте спокойствие. Да, там так же все реально, даже более чем. Чтобы удержать внимание сновидения,
            кидайте короткие взгляды на объекты которые видите. Трогайте, осязайте их. Для начала вам будет достаточно.
            Со временем вы будете нарабатывать опыт и понимать что к чему, а в этом вам может помочь наш телеграм <a
            className="text-blue-800 font-medium" href="https://t.me/hacker_os">канал</a>, в котором собраны десятки
            книг по осознанным сновидениям. Переходите подписывайтесь. <a className="text-blue-800 font-medium"
                                                                          href="https://t.me/hacker_os">https://t.me/hacker_os</a>
          </p>
        </div>
      </Section>
    </>

  )
}

export default LDContent;