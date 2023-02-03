import { Outlet } from 'react-router-dom';

const UserLibrary = () => {
  return (
    <div>
      User Library
      <Outlet />
    </div>
  );
};

export default UserLibrary;
