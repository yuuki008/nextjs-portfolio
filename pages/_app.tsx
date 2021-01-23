import App from "next/app";
import Head from "next/head";


export default class MyApp extends App {
  render(){
    const {Component, pageProps} = this.props
    return(
      <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, maxmum-scale=1"
        />
        <title>nomus portfolio</title>
      </Head>
      <Component {...pageProps} />
      </>
    )
  }
}
