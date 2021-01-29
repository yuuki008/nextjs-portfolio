This is a starter template for [Learn Next.js](https://nextjs.org/learn).

// const fetching_video: any = await fetch(
// `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channel_id}&part=snippet,id&order=date&maxResults=6`
// )
// .then((res) => {
// if (res.ok) {
// const data: any = res.json();
// console.log(data.items);
// return { videos: data, is_fetched: true };
// }

// throw new Error("UNDEFINED");
// })
// .catch((error) => {
// console.log(error);
// return { videos: [], is_fetched: false };
// });

// if (fetching_video.is_fetched) {
// fetch_videos = {
// videos: fetching_video.videos.items,
// is_fetched: true,
// };
// } else {
// console.log(fetching_video);
// fetch_videos = {
// videos: [],
// is_fetched: false,
// };
// }
