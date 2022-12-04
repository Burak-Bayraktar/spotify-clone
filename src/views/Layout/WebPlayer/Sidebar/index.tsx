import useSidebarWidth from 'hooks/useSidebarWidth';

const Sidebar = () => {
  const { resizerRef, sidebarRef } = useSidebarWidth();

  return (
    <>
      <aside ref={sidebarRef} className="sidebar-container">
        <div>Sidebar</div>
        <span ref={resizerRef} className="resizer" />
      </aside>
    </>
  );
};

export default Sidebar;
