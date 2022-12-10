import UserPlaylists from 'components/WebPlayer/Sidebar/user-playlists';
import useSidebarWidth from 'hooks/useSidebarWidth';
import './style.scss';

const Sidebar = () => {
  const { resizerRef, sidebarRef, isResizing } = useSidebarWidth();

  return (
    <>
      <aside ref={sidebarRef} className={`sidebar-container${isResizing ? ' -resizing' : ''}`}>
        <UserPlaylists />
        <span ref={resizerRef} className="resizer" />
      </aside>
    </>
  );
};

export default Sidebar;
