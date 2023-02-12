import ExternalLink from 'assets/svg/ExternalLink';
import ArrowDown from 'assets/svg/ArrowDown';
import { useUser } from 'contexts/UserContext';
import { useRef, useState } from 'react';
import PopupMenu from 'components/shared/PopupMenu';
import ArrowUp from 'assets/svg/ArrowUp';
import { Link } from 'react-router-dom';
import './UserButtonContainer.scss';

const UserButtonContainer = () => {
  const [show, setShow] = useState<boolean>();
  const menuOpenerRef = useRef<HTMLDivElement>(null);
  const { display_name, images, id } = useUser();
  const [userAvatarUrl] = images;

  const onMenuVisibilityChange = (showState: boolean) => {
    setShow(showState);
  };

  return (
    <div className="user-button-container">
      <div className="menu-opener" ref={menuOpenerRef}></div>
      <div className="user-avatar">
        <img src={userAvatarUrl.url} alt="user-avatar" />
      </div>
      <span className="user-display-name">{display_name}</span>
      {show ? <ArrowUp /> : <ArrowDown />}
      <PopupMenu menuOpenerRef={menuOpenerRef} onVisibilityChange={onMenuVisibilityChange}>
        <div className="user-button-menu">
          <ul className="user-button-menu-list">
            <li className="user-button-menu-list-item">
              <Link to="/profile">
                <span className="button-text">Account</span>
                <ExternalLink />
              </Link>
            </li>
            <li className="user-button-menu-list-item">
              <Link to={`/player/user/${id}`}>
                <span className="button-text">Profile</span>
              </Link>
            </li>
            <li className="user-button-menu-list-item">
              <Link to="/player/preferences">
                <span className="button-text">Settings</span>
              </Link>
            </li>
            <li className="user-button-menu-list-item">
              <Link to="/?logout=true">
                <span className="button-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </PopupMenu>
    </div>
  );
};

export default UserButtonContainer;
