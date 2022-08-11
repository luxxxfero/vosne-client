import type {NextPage} from "next";
import Head from "next/head";
import MainLayout from "../../layouts/main-layout";
import {INTERPRETATIONS} from "../../types";
import InterpretationContent from "../../components/page-content/interpretation-content";
import {GetStaticPaths, GetStaticProps} from "next";
import VosneService from "../../services/vosne-api/vosne-service";
import {getLetter} from "../../utils/get-letter";


type InterpretationProps = {
  interpretations: INTERPRETATIONS,
}

const Word: NextPage<InterpretationProps> = ({interpretations}) => {
  const title = `К чему сн${getLetter(interpretations[0].title)}тся ${interpretations[0].title} | Сонник - Восне`;
  const description = interpretations[0].interpretations.join(" ");
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
      </Head>
      <MainLayout>
        <InterpretationContent interpretations={interpretations}/>
      </MainLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  const titles = await VosneService.getInterpretationTitles();

  return {
    paths: [...titles.map(it => {
      return {
        params: {word: it}
      }
    })],
    fallback: false
  }

}

export const getStaticProps: GetStaticProps = async (context) => {

  const params = context.params;

  const word = params?.word as string;

  const interpretations = await VosneService.getInterpretationsByWord(word)

  return {
    props: {
      interpretations: interpretations,
    },
  }
}


export default Word;