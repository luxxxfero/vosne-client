import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="yandex-verification" content="1a658ccd12f4daad" />
        <meta name="google-site-verification" content="rbGU8L0m6OaIkjGKKcYXohU01PmGcsJeHL62eKf5JgA" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
