import HeaderBackButton from 'assets/svg/Player_Header/HeaderBackButton';
import HeaderForwardButton from 'assets/svg/Player_Header/HeaderForwardButton';
import useHistory from 'hooks/useHistory';
import { Suspense } from 'react';
import './style.scss';
import UserButtonContainer from 'components/WebPlayer/Header/components/UserButtonContainer';

type HeaderProps = {
  Children: React.LazyExoticComponent<() => JSX.Element> | undefined;
};

const Header = ({ Children }: HeaderProps) => {
  const { goBack, goForward, buttonActiveState } = useHistory()!;

  return (
    <header className="header-container">
      <div className="navigation-button-container">
        <button className={`navigation-button back-button ${buttonActiveState.back ? '--active' : '--inactive'}`} onClick={goBack}>
          <HeaderBackButton />
        </button>
        <button className={`navigation-button forward-button ${buttonActiveState.forward ? '--active' : '--inactive'}`} onClick={goForward}>
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
      <UserButtonContainer />
    </header>
  );
};

export default Header;
