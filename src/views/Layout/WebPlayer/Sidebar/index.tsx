import LogoImg from 'assets/svg/LogoImg';
import InstallApp from 'components/WebPlayer/Sidebar/InstallApp';
import NavigationSection from 'components/WebPlayer/Sidebar/NavigationSection';
import UserPlaylists from 'components/WebPlayer/Sidebar/UserPlaylists';
import useSidebarWidth from 'hooks/useSidebarWidth';
import { Link } from 'react-router-dom';
import useChildrenHeight from '../../../../hooks/useChildrenHeight';
import './style.scss';

const Sidebar = () => {
  const { resizerRef, isResizing } = useSidebarWidth();
  const { childrenRefs, targetHeight } = useChildrenHeight();

  return (
    <>
      <aside ref={childrenRefs.sidebarRef} className={`sidebar-container${isResizing ? ' -resizing' : ''}`}>
        <div ref={childrenRefs.logoRef as React.RefObject<HTMLDivElement>} className="logo-container">
          <Link to="/player/home">
            <LogoImg />
          </Link>
        </div>
        <NavigationSection navigationSectionRef={childrenRefs.navigationRef as React.RefObject<HTMLDivElement>} />

        <hr ref={childrenRefs.dividerRef as React.RefObject<HTMLHRElement>} className="--divider" />

        <UserPlaylists containerRef={childrenRefs.userPlaylistsRef as React.RefObject<HTMLDivElement>} componentHeight={targetHeight} />
        <InstallApp elementRef={childrenRefs.installAppRef as React.RefObject<HTMLDivElement>} />
        <span ref={resizerRef} className="resizer" />
      </aside>
    </>
  );
};

export default Sidebar;
