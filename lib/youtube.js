export async function getYoutubeChannelStats(channelId) {
  const API_KEY = 'AIzaSyCRhmYfTcx7yhDjJ77wUyNwd-yaoEZh7kY'; // 👈 여기에 본인 API 키 입력
  const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  if (!data.items || data.items.length === 0) {
    return null;
  }

  const channel = data.items[0];
  return {
    title: channel.snippet.title,
    description: channel.snippet.description,
    subscriberCount: channel.statistics.subscriberCount,
    viewCount: channel.statistics.viewCount,
    videoCount: channel.statistics.videoCount,
  };
}

