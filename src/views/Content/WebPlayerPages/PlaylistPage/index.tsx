import { useHistory } from 'contexts/HistoryContext';
import { useSearchParams } from 'react-router-dom';

const PlaylistPage = () => {
  const [searchParams] = useSearchParams();
  const playlistId = searchParams.get('id');
  const appHistory = useHistory([playlistId]);

  return <div>PlaylistPage = {playlistId}</div>;
};

export default PlaylistPage;
