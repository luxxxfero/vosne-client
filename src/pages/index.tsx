import type {GetServerSideProps, NextPage} from 'next'
import Head from 'next/head'
import MainLayout from "../layouts/main-layout";
import HomeContent from "../components/page-content/home-content";
import {TOP_DREAMS} from "../types";
import VosneService from "../services/vosne-api/vosne-service";

type HomeProps = {
  topDreams: TOP_DREAMS
}

const Home: NextPage<HomeProps> = ({topDreams}) => {

  const title = "Сонник «Восне» - Толкование снов онлайн бесплатно. Сонник Миллера, Сонник Ванги, Исламский сонник и др. |" +
    " Восне.рф";
  const description = "Сонник - Толкование снов онлайн бесплатно. Сонник Миллера, Сонник Ванги, Сонник Евгения Цветкова, Исламский сонник, Мусульманский сонник и другие."

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
      </Head>
      <MainLayout>
        <HomeContent topDreams={topDreams}/>
      </MainLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const data = await VosneService.getTopInterpretationTitles()

  return {
    props: {
      topDreams: data
    }
  }
}

export default Home
