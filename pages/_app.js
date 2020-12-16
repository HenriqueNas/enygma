import '../global_style.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mr Nobody</title>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp