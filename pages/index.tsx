export { home as default } from "../components/home/index";
import { RSA_NO_PADDING } from "constants";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const response: any = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.API_KEY}&channelId=${process.env.CHANNEL_ID}&part=snippet,id&order=date&maxResults=6`
  )
    .then((res: any) => res.json())
    .then((res) => {
      console.log(res);
      if (res.items?.length > 0) {
        return { isFetch: true, videos: res.items };
      } else {
        return { isFetch: false, videos: [] };
      }
    });

  console.log(response);
  return {
    props: {
      fetch_videos: response,
    },
  };
};
