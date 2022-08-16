import {NextPage} from "next";
import LDLayout from "../../layouts/ld-layout";
import LDContent from "../../components/page-content/ld-content";
import Head from "next/head";


const LD: NextPage = () => {

  const title = "Что такое осознанный сон и для чего он нужен";
  const description = "Осознанный сон (ОС, lucid dream) – это особое состояние сознания, в котором человек понимает что он спит, тем самым появляется способность в определенной мере контролировать свои сны.";

  return  (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description}/>
      </Head>
      <LDLayout>
        <LDContent/>
      </LDLayout>
    </>

  )
}

export default LD;