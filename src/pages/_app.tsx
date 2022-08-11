import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";
import ym, {YMInitializer} from "react-yandex-metrika";
import {Router} from "next/router";

Router.events.on("routeChangeComplete", (url: string) => {
  if(typeof window !== "undefined") {
    ym("hit", url)
  }
})

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://mc.yandex.ru"/>
        <meta name="yandex-verification" content="1a658ccd12f4daad" />
        <meta name="google-site-verification" content="rbGU8L0m6OaIkjGKKcYXohU01PmGcsJeHL62eKf5JgA" />
        <meta property="og:image" content="https://www.xn--b1agxdp.xn--p1ai/og.jpg"/>
      </Head>
      <YMInitializer accounts={[89794957]} options={{webvisor: false, defer: true}}/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
