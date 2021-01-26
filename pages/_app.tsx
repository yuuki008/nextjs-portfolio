import axios from "axios";
import App from "next/app";
import Head from "next/head";
import "../public/styled.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const API_KEY = "AIzaSyBd3K-Y0TPpcid2YXmXnW8DpO3y7_8kS4Y";
    const channel_id = "UCFMxIgcRu1mbjMg3LnvNHaw";

    async function getVideo() {
      return await axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channel_id}&part=snippet,id&order=date&maxResults=20`
        )
        .then((res: any) => {
          console.log(res.data.items);
          return res.data.items;
        });
    }

    console.log(getVideo());

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
