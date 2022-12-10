import LogoImg from 'assets/svg/LogoImg';
import NavigationSection from 'components/WebPlayer/Sidebar/NavigationSection';
import UserPlaylists from 'components/WebPlayer/Sidebar/UserPlaylists';
import useSidebarWidth from 'hooks/useSidebarWidth';
import './style.scss';

const Sidebar = () => {
  const { resizerRef, sidebarRef, isResizing } = useSidebarWidth();

  return (
    <>
      <aside ref={sidebarRef} className={`sidebar-container${isResizing ? ' -resizing' : ''}`}>
        <div className="logo-container">
          <LogoImg />
        </div>
        <NavigationSection />
        <UserPlaylists />
        <span ref={resizerRef} className="resizer" />
      </aside>
    </>
  );
};

export default Sidebar;
