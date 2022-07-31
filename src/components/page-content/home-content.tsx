import React from "react";
import Link from "next/link";
import {PATHS, TOP_DREAMS} from "../../types";
import Section from "../ui/section/section";
import FireIcon from "../icons/fire-icon";
import {getLetter} from "../../utils/get-letter";

type HomeContentProps = {
  topDreams: TOP_DREAMS
}

const HomeContent: React.FC<HomeContentProps> = ({topDreams}) => {

  const topDreamsEl = topDreams.map((it, idx) => {

    const letter = getLetter(it);

    return (
      <li className="relative bg-green-600 text-white rounded" key={idx}>
        <Link href={`${PATHS.INTERPRETATION}/${it}`}>
          <a className="font-medium flex p-4 break-words h-full text-center items-center justify-center w-[160px]">К чему сн{letter}тся {it}</a>
        </Link>
        <FireIcon className="absolute right-2 top-2 w-5 h-5 fill-yellow-500"/>
      </li>
    )
  })

  return (
    <>
      <section className="text-white mb-7 rounded p-5 bg-blue-600">
        <h1 className="mb-4 text-2xl">Сонник - толкование снов</h1>
        <p>Толкование снов по 150 сонникам. Сонник Миллера, Сонник Ванги, Сонник Евгения Цветкова, Исламский сонник, Мусульманский сонник и другие.</p>
      </section>
      <Section title="Популярные сны">
        <nav>
          <ul className="h-[160px] flex flex-nowrap gap-5 overflow-x-scroll">
            {topDreamsEl}
          </ul>
        </nav>
      </Section>
      <Section className="rounded p-5 bg-amber-100" title="Как толковать сны">
        <p className="mb-3">
          Для того чтобы хорошо толковать свои сны, надо научиться их запоминать.
        </p>
        <p className="mb-3">
          Желательно запоминать как можно больше подробностей и деталей. Чтобы сохранилась свежесть ощущений, записи
          снов надо делать в настоящем времени (например, «я летаю...», а не «я летал...»). Самые важные сообщения имеют
          красочные, эмоциональные сны.
        </p>
        <p className="mb-3">
          Начните работу с любого сна и ищите соответствия между событиями во сне и событиями в реальной жизни.
          Рассмотрите по очереди отдельные детали. Особенно обратите внимание на конфликтные ситуации и особенно на ваши
          ощущения в тот момент. (Например, если во сне укусила змея — это может означать в символической форме злобную
          клевету в реальной жизни и пр.) Проанализируйте сон с точки зрения ваших переживаний и ощущений. Во сне от
          подсознания к нам идут сигналы о том, чего мы можем не осознавать наяву. Сны могут также отображать
          индивидуальное состояние человека (например, когда студентам снятся экзамены и т. д.).
        </p>
        <p className="mb-3">
          Научившись толковать сны, вы лучше разберетесь в себе, в своем образе жизни, в своих реальных возможностях.
        </p>
        <p className="mb-3">Грезы и сновидения различны по смыслу. Есть знаки — перевертыши (например, громко смеяться
          во сне — к слезам, сильно плакать — к радости), есть знаки со скрытыми значениями (умыть руки во сне —
          освободиться от проблемы), также есть много буквальностей.</p>
        <p className="mb-3">Транспорт во сне ассоциируется с ходом жизни. Автомобили, поезда, самолеты и другие средства
          передвижения — это цели, к которым мы стремимся, и направления, по которым строятся наши планы и отношения с
          людьми. Тревожные ситуации в таких снах (опоздал на самолет, увидел автомобильную катастрофу, застрял в
          автомобильной пробке, потерял билет на поезд и пр.) показывают затруднения, которые можно испытать на пути к
          достижению цели или в выражении чувства к близким людям. Отсутствие движения транспорта может указывать на
          потерю жизненного пути. Двигаться по прямой дороге или вверх — всегда хорошо, двигаться по извилистой дороге
          со многими остановками или скатываться вниз — к ухудшению дел. Поворот налево — к удаче, направо — к
          проблемам. Присутствие в транспорте всегда лучше, чем участие (присутствие — вас везут, участие — вы сами
          управляете транспортом). Присутствие обозначает, что дела будут делаться сами собой, участие — что надо
          прикладывать свои собственные усилия для продвижения дела. Поломки транспортных средств чаще указывают на
          душевное состояние человека или на сбой в связи со здоровьем. (Например, сон — «забарахлил» мотор любимой
          машины, наяву — заболело сердце у водителя).</p>
        <p className="mb-3">Дворцы, здания, комнаты и другие жилые помещения (гостиницы, общежития и пр.) в снах чаще
          всего символизируют мир наших мыслей, нашу индивидуальность, семейные и межличностные отношения. Многоэтажные
          здания символизируют жизненные итоги — чем выше здание, тем стабильнее и устойчивее положение. Вид здания
          сверху (с крыши, либо с высоты птичьего полета) — означают духовный план — философские размышления о жизни или
          анализ всего достигнутого с «высшей точки зрения». Постройки и нежилые помещения символизируют различные
          бытовые мероприятия. Вид заброшенных строений напоминает о нереализованных планах далекого прошлого. Такое же
          значение имеет заброшенный неухоженный сад или поле, поросшее сорняками.</p>
        <p className="mb-3">
          Вода чаще всего имеет отношение к материальным благам, к общему ходу жизни, ответственна за сферу чувств и
          перемен, а также отражает глубину нашей души и нашего сознания. В астральном мире она символизирует высокие
          эмоции и позитивные чувства. Под покровительством воды находятся такие качества, как вера, преданность,
          уверенность. Эта стихия поддерживает деловые союзы, дружественные и хорошие служебные отношения, способствует
          налаживанию контактов и связей, расширяет нужные знакомства. В сфере личных качеств вода руководит
          интеллектом, интуицией, мышлением, умением идти на компромиссы и добиваться своего, быть гибким и
          дипломатичным, Добиваться успеха там, где бесполезны борьба, сила и власть. Стихия воды может способствовать
          симпатии и любви, конечно, не такой страстной, как стихия огня, но зато более продолжительной, надежной и
          мудрой. Также вода может быть показателем состояния здоровья (например, грязная вода— к болезни).
        </p>
        <p className="mb-3">
          Земля — это то, что у нас под ногами, это наша опора, а также символ творческого созидания, работы и труда,
          трудности или легкости в жизни. Земля играет роль образного элемента, это часть нашего физического мира,
          которому присуще все материальное, стабильное, надежное и прочное. Она близка по сути женской энергии
          человека. Земля, воспринимаемая как праматерь всего сущего на ней, издавна занимает почетное место в
          ритуальных религиях. Она обладает большим богатством творческих сил. Эта стихия руководит реальными действиями
          и поступками. Все мысли человека, даже самые одухотворенные, имеют земное происхождение. Наши действия,
          поступки, реализация наших планов происходят в рамках земного существования и полностью подчинены правилам и
          законам земной жизни. Энергия земли руководит всеми реальными благами на этой планете. В ведении этой стихии
          находятся любые дела бизнеса. Люди, к которым благоволит земная стихия, обычно очень удачливы и ловки. В
          материальной сфере им всегда сопутствует удачное стечение обстоятельств.
          Сны, связанные с землей, могут отображать способность привлекать деньги, находить самые верные способы их
          применения, добывать различные блага для улучшения качества жизни. Красивые участки земли, где спящий ощущает
          себя бодрым и сильным, означают здоровье и благополучное долголетие.
        </p>
        <p className="mb-3">
          Небо — стихия воздуха — это исполнение надежд и наши духовные запросы. Место, куда мы обращаемся за помощью,
          откуда нам может «засветить» идея и способы исполнения желаний. Небо отражает в нашем духовном, астральном
          плане те качества, которые также необходимы для всех дел интеллектуального плана. Стихия воздуха одаривает
          людей неожиданными идеями, дает остроумие, интеллигентность, ловкость, быстроту ума, коммуникабельность и
          чувство юмора. Она возбуждает в нас потребность в контактах с природой, с другими людьми и с высшими духовными
          силами. Поэтому наши творческие дела и помыслы могут отразиться в виде сонного небесного пейзажа.
        </p>
        <p className="mb-3">
          Огонь — знак страсти, радости, гнева, гордости, сильных чувств. Все, что относится к вдохновению. Огонь — это
          внутренняя сила, которая побуждает нас действовать, чувствовать, он символизирует уверенность и решительность,
          желание преодолевать препятствия и противостоять обстоятельствам. Огонь — Божья искра в каждом из нас. Стихия
          огня символизирует поток энергии, дающей жизнь, энтузиазм и интерес. Она является силой, подталкивающей к
          действию и дающей человеку возможность понять собственные способности и свою роль в жизни. Энергия огня и
          света всегда присутствует в нашей сущности и влияет на наши действия и поступки. Она проявляется прежде всего
          в таких случаях, где возможны сильные эмоции, в ситуациях, связанных с чувствами. Стихия огня дает природную
          силу и профессиональный успех в спорте, карьере, в самых различных соревнованиях и конкурсах. Также огненная
          стихия поддерживает в тех случаях, когда необходимо противостоять чужому влиянию, иметь хорошую защиту от
          негативных внешних факторов, сохранять здоровье и успех.
          Огонь во сне может также означать яркие и сильные любовные чувства. В нашей речи не случайны такие выражения,
          как «пламенная любовь», «сжигающая ревность», «угаснувшее чувство», «вспыхнувшее подозрение».
        </p>
        <p className="mb-3">
          Помимо общих символов, касающихся стихий воды, земли, воздуха и огня, существуют еще и магические символы, так
          как эти стихии олицетворяют четыре основных элемента жизни. Все, имеющееся на нашей планете, состоит из этих
          четырех взаимопроникающих мистических начал. Поэтому и некоторые наши сны могут носить мистический, магический
          смысл. Вода более всего ответственна за ход дел, сферу чувств и взаимоотношений; воздух — за наше мышление;
          земля — за наши конечные, конкретные поступки и действия; огонь — за нашу сознательную волю и честолюбие.
          Металл несет ответственность за нашу силу духа.
        </p>
        <p className="mb-3">
          Наибольшего внимания заслуживает то, что относится, непосредственно к спящему. Одежда во сне имеет отношение к
          положению в обществе (согласно пословицам: «По одежке протягивай ножки», «По одежке встречают, по уму
          провожают», однако встречают все-таки по одежке, то есть первое впечатление складывается из того, как человек
          одет-обут). Также одежда является защитой, не только материальной, но и энергетической оболочкой тела. Если
          человеку снится, что он без одежды, значит кто-то «подвампиривает» и пользуется его энергетикой.
        </p>
        <p className="mb-3">
          Деревья и другие высокие растения во сне означают жизненную силу, работу по ходу жизни, возможность карьеры,
          иногда — местность (например, издали виднеющийся лес — чужая сторона). Плоды — награда за труд. Состояние
          растений может означать сезон времени. (Опавшие листья во сне могут символизировать начало осени). Трава —
          символ «пастбища», на котором можно поживиться.

        </p>
        <p className="mb-3">
          Сны о людях, которых мы не знаем, или образы людей из далекого прошлого, которых наяву мы перестали
          вспоминать, обычно отражают наше окружение, других людей из реальной жизни (может быть совпадение по именам
          или сходные ситуации). Люди, которые нам во сне не нравятся, могут отражать нашу скрытую внутреннюю сущность
          (по методу — подобное притягивает подобное). Они могут являться зеркалом наших скрытых недостатков, над
          которыми надо поработать.
        </p>
        <p>
          Катастрофа во сне является отражением тех проблем, которые следует решать безотлагательно, иначе это может
          стать катастрофой наяву. Такой сон не только символически отображает нашу действительность, но и является
          предупреждением или подсказкой.
        </p>
      </Section>
    </>
  )
}

export default HomeContent;