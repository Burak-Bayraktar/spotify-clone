import useTotalHeightOfElement from 'hooks/useTotalHeightOfElement';
import { useMemo, useRef } from 'react';

const useChildrenHeight = () => {
  const navigationRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const dividerRef = useRef<HTMLElement>(null);
  const installAppRef = useRef<HTMLElement>(null);
  const userPlaylistsRef = useRef<HTMLDivElement>(null);

  const { height: navigationHeight } = useTotalHeightOfElement({ element: navigationRef });
  const { height: logoHeight } = useTotalHeightOfElement({ element: logoRef });
  let { height: sidebarContainerHeight, styles: sidebarContainerStyles } = useTotalHeightOfElement({
    element: sidebarRef,
  });
  const { height: dividerHeight } = useTotalHeightOfElement({ element: dividerRef });
  const { height: installAppHeight } = useTotalHeightOfElement({ element: installAppRef });

  if (sidebarContainerStyles) {
    const paddingTop = Number(sidebarContainerStyles.paddingTop.slice(0, -2));
    sidebarContainerHeight = sidebarContainerHeight - paddingTop;
  }

  const calculateTargetElementHeight = () => {
    if (!userPlaylistsRef.current) return;

    const targetMarginTop = Number(getComputedStyle(userPlaylistsRef.current!).marginTop.slice(0, -2));
    const test =
      sidebarContainerHeight - (navigationHeight + logoHeight + dividerHeight + installAppHeight + targetMarginTop);
    return test;
  };

  const componentHeight = useMemo(calculateTargetElementHeight, [
    navigationHeight,
    logoHeight,
    sidebarContainerHeight,
    dividerHeight,
    installAppHeight,
    userPlaylistsRef.current,
  ]);

  return {
    childrenRefs: { navigationRef, logoRef, sidebarRef, dividerRef, installAppRef, userPlaylistsRef },
    childrenHeights: { navigationHeight, logoHeight, sidebarContainerHeight, dividerHeight, installAppHeight },
    targetHeight: componentHeight || 0,
  };
};

export default useChildrenHeight;
