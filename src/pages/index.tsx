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
  return (
    <>
      <Head>
        <title>Сонник - Толкование снов онлайн бесплатно | Восне</title>
        <meta name="description" content="Сонник - Толкование снов онлайн бесплатно. Сонник Миллера, Сонник Ванги, Сонник Евгения Цветкова, Исламский сонник, Мусульманский сонник и другие." />
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
