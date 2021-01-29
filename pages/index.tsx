export { home as default } from "../components/home/index";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const API_KEY = "AIzaSyBd3K-Y0TPpcid2YXmXnW8DpO3y7_8kS4Y";
  const channel_id = "UCFMxIgcRu1mbjMg3LnvNHaw";

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channel_id}&part=snippet,id&order=date&maxResults=6`
  )
    .then((res: any) => {
      console.log(res);
      if (res.ok) {
        return { isFetch: true, videos: res.items.json() };
      }
      throw new Error();
    })
    .catch(() => {
      return { isFetch: false, videos: [] };
    });

  return {
    props: {
      fetch_videos: response,
    },
  };
};
