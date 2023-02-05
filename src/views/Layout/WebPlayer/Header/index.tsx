import HeaderBackButton from 'assets/svg/Player_Header/HeaderBackButton';
import HeaderForwardButton from 'assets/svg/Player_Header/HeaderForwardButton';
import UserMenuOpener from 'assets/svg/Player_Header/UserMenuOpener';
import { useHistory } from 'contexts/HistoryContext';
import { useUser } from 'contexts/UserContext';
import { Suspense } from 'react';
import './style.scss';

type HeaderProps = {
  Children: React.LazyExoticComponent<() => JSX.Element> | undefined;
};

const Header = ({ Children }: HeaderProps) => {
  const { goBack, goForward, buttonActiveState } = useHistory()!;
  const { display_name, images } = useUser();
  const [userAvatarUrl] = images;

  return (
    <header className="header-container">
      <div className="navigation-button-container">
        <button
          className={`navigation-button back-button ${buttonActiveState.back ? '--active' : '--inactive'}`}
          onClick={goBack}
        >
          <HeaderBackButton />
        </button>
        <button
          className={`navigation-button forward-button ${buttonActiveState.forward ? '--active' : '--inactive'}`}
          onClick={goForward}
        >
          <HeaderForwardButton />
        </button>
      </div>
      <div className="child-container">
        {Children && (
          <Suspense fallback="">
            <Children />
          </Suspense>
        )}
      </div>
      <div className="user-button-container">
        <div className="user-avatar">
          <img src={userAvatarUrl.url} alt="user-avatar" />
        </div>
        <span className="user-display-name">{display_name}</span>
        <UserMenuOpener />
      </div>
    </header>
  );
};

export default Header;
