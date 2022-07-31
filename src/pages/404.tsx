import type {NextPage} from "next";
import Link from "next/link";
import Head from "next/head";

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Страница не найдена</title>
      </Head>
      <section className="flex items-center h-screen p-16 bg-gray-50 text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-400">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">Извините, такой страницы не существует.</p>
            <p className="mt-4 mb-8 text-gray-600">Но не волнуйтесь, вы можете найти много других вещей на главной странице.</p>
            <Link href="/">
              <a rel="noreferrer"  className="px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50">Вернуться на главную</a>
            </Link>
          </div>
        </div>
      </section>
    </>

  )
}

export default NotFound;