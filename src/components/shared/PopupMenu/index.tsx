import { RefObject, useEffect, useRef, useState } from 'react';
import './style.scss';

type PopupMenuProps = {
  children: React.ReactNode;
  menuOpenerRef: RefObject<HTMLElement>;
  onVisibilityChange?: (showState: boolean) => void;
};

const PopupMenu = ({ children, menuOpenerRef, onVisibilityChange }: PopupMenuProps) => {
  const [show, setShow] = useState<boolean>(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', openUserButtonMenu);

    return () => {
      document.removeEventListener('click', openUserButtonMenu);
    };
  }, [show]);

  const openUserButtonMenu = (e: Event) => {
    const isClickTargetMenuOpener = e.composedPath().includes(menuOpenerRef.current!);

    if (isClickTargetMenuOpener && show) {
      if (typeof onVisibilityChange === 'function') {
        onVisibilityChange(false);
      }
      return setShow(false);
    }

    if (typeof onVisibilityChange === 'function') {
      onVisibilityChange(isClickTargetMenuOpener);
    }

    setShow(isClickTargetMenuOpener);
  };

  return (
    <div ref={popupRef} className="popup-menu" data-menu-open={show}>
      {children}
    </div>
  );
};

export default PopupMenu;
