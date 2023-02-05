import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const UserLibrary = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({
      pathname: '/player/collection/playlists',
    });
  }, []);

  return (
    <div>
      User Library
      <Outlet />
    </div>
  );
};

export default UserLibrary;
