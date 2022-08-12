import type {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Head from "next/head";
import MainLayout from "../../layouts/main-layout";
import VosneService from "../../services/vosne-api/vosne-service";
import {abc} from "../../constants";
import {TITLES, TOP_DREAMS} from "../../types";
import LetterContent from "../../components/page-content/letter-content";

type LetterProps = {
  titles: TITLES,
  letter: string
}

const Letter: NextPage<LetterProps> = ({titles, letter}) => {
  const title = `Толкование снов на букву ${letter}. Сонник Миллера, Сонник Ванги, Исламский сонник и др. | Восне.рф`;
  const description = "Сонник - Толкование снов онлайн бесплатно. Сонник Миллера, Сонник Ванги, Сонник Евгения Цветкова, Исламский сонник, Мусульманский сонник и другие."
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
      </Head>
      <MainLayout>
        <LetterContent titles={titles} letter={letter}/>
      </MainLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [...abc.map(it => {
      return {
        params: {letter: it}
      }
    })],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {

  const params = context.params;

  const letter = params?.letter as string || "а";

  const titles = await VosneService.getInterpretationTitlesByLetter(letter)

  return {
    props: {
      titles: titles,
      letter: letter
    },
  }
}

export default Letter;