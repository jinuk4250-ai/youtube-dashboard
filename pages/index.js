import { useEffect, useState } from 'react';
import { getYoutubeChannelStats } from '../lib/youtube';

export default function Home() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      const data = await getYoutubeChannelStats('UC_x5XG1OV2P6uZZ5FSM9Ttw'); // 구글 개발자 채널 ID (예시)
      setStats(data);
    }

    fetchStats();
  }, []);

  if (!stats) return <div>로딩 중...</div>;

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 40 }}>
      <h1>유튜브 대시보드</h1>
      <p><strong>채널명:</strong> {stats.title}</p>
      <p><strong>설명:</strong> {stats.description}</p>
      <p><strong>구독자:</strong> {stats.subscriberCount}</p>
      <p><strong>조회수:</strong> {stats.viewCount}</p>
      <p><strong>영상 수:</strong> {stats.videoCount}</p>
    </div>
  );
}
