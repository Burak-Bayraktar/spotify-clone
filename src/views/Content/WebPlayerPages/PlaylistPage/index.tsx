import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const PlaylistPage = () => {
  const [searchParams] = useSearchParams();
  const playlistId = searchParams.get('id');

  return <div>PlaylistPage = {playlistId}</div>;
};

export default PlaylistPage;
