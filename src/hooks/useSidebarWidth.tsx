import { useUser } from 'contexts/UserContext';
import { useEffect, useRef } from 'react';

enum ESidebarWidth {
  MIN_WIDTH = 120,
  MAX_WIDTH = 384,
}

const useSidebarWidth = () => {
  const { display_name } = useUser();
  const sidebarRef = useRef<HTMLElement>(null);
  const resizerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    resizerRef.current?.addEventListener('mousedown', (e) => {
      window.addEventListener('mousemove', resize);

      window.addEventListener('mouseup', (e) => {
        window.removeEventListener('mousemove', resize);
      });
    });
  }, []);

  useEffect(() => {
    const getSidebarWidth = () => {
      const localStorageSidebarWidth: string | null = localStorage.getItem(`${display_name}:sidebar-width`);
      const DEFAULT: string = getComputedStyle(document.documentElement).getPropertyValue('--width').slice(0, -2);

      return localStorageSidebarWidth || DEFAULT;
    };

    document.documentElement.style.setProperty('--width', `${getSidebarWidth()}px`);
  }, [display_name]);

  function resize(e: MouseEvent) {
    if (e.pageX < ESidebarWidth.MIN_WIDTH || e.pageX > ESidebarWidth.MAX_WIDTH) return;

    document.documentElement.style.setProperty('--width', `${e.pageX}px`);
    localStorage.setItem(`${display_name}:sidebar-width`, e.pageX.toString());
  }

  return { sidebarRef, resizerRef };
};

export default useSidebarWidth;
