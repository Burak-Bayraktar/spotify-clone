import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { PlayerViewPaths } from 'views/routes';
const UserLibrary = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const collectionBasePath: PlayerViewPaths = 'collection';
    const playerBasePath: PlayerViewPaths = '/player';

    if (location.pathname + location.search === `${playerBasePath}/${collectionBasePath}`) {
      navigate({
        pathname: '/player/collection/playlists',
      });
    }
  }, [location.pathname + location.search]);

  return (
    <div>
      User Library
      <Outlet />
    </div>
  );
};

export default UserLibrary;
