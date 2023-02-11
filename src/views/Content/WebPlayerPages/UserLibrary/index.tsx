import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { BasePlayerViewPaths } from 'types/WebPlayer/routeTypes';
import { filters } from 'types/WebPlayer/UserLibrary/types';

const UserLibrary = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const collectionBasePath: BasePlayerViewPaths = 'collection';
    const playerBasePath: BasePlayerViewPaths = '/player';

    const collectionBaseUrl = `${playerBasePath}/${collectionBasePath}`;
    const activePageUrl = location.pathname + location.search;

    if (activePageUrl === collectionBaseUrl) {
      const firstFilterPath = `${collectionBaseUrl}/${filters[0]}`;
      navigate({
        pathname: firstFilterPath,
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
