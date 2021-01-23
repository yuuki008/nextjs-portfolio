import App from "next/app";
import Head from "next/head";
import "../public/styled.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1, maxmum-scale=1"
          />
          <title>Yuuki Nomura</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
