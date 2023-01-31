import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type HistoryTrack = { id: number; url: { pathname: string; search: string } };
type NavigationState = 'NO_ACTION' | 'BACK' | 'FORWARD';
type NavigateButtonName = 'back' | 'forward';

const FIRST_ROUTE_ID: number = 1;

const useHistoryTrack = () => {
  const [historyTracker, setHistoryTracker] = useState<HistoryTrack[]>([]);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const isFirstRender = useRef<boolean>(true);
  const currentPageId = useRef<number>(FIRST_ROUTE_ID);
  let navigationState = useRef<NavigationState>('NO_ACTION');
  const currentUrl = pathname + search;

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (navigationState.current === 'BACK' || navigationState.current === 'FORWARD') {
      navigationState.current = 'NO_ACTION';
      return;
    }

    setHistoryTracker((prev) => {
      const lastSavedPathname = prev[prev.length - 1]?.url.pathname;
      const overwriteLastItem = lastSavedPathname === pathname;

      if (overwriteLastItem) {
        const newArr = [...prev].slice(0, -1);
        return createNewHistoryTrackerArray(newArr);
      }

      currentPageId.current = prev.length + 1;
      return createNewHistoryTrackerArray(prev);
    });
  }, [currentUrl]);

  const [buttonActiveState, setButtonActiveState] = useState<Record<NavigateButtonName, boolean>>({
    back: false,
    forward: false,
  });

  useEffect(() => {
    if (!historyTracker.length) return;

    if (currentPageId.current < historyTracker.length) {
      setButtonActiveState(() => {
        return { back: true, forward: true };
      });
    }

    if (currentPageId.current === historyTracker.length) {
      setButtonActiveState(() => {
        return { back: true, forward: false };
      });
    }

    if (currentPageId.current === FIRST_ROUTE_ID) {
      setButtonActiveState(() => {
        return { back: false, forward: true };
      });
    }
  }, [currentPageId.current]);

  const createNewHistoryTrackerArray = (previousArray: HistoryTrack[]) => {
    return [
      ...previousArray,
      {
        id: previousArray.length + 1,
        url: { pathname, search },
      },
    ];
  };

  const goBack = () => {
    if (currentPageId.current - 1 > 0) {
      currentPageId.current -= 1;
      const prevPage = historyTracker.find((item) => item.id === currentPageId.current);
      navigationState.current = 'BACK';

      navigate({ pathname: prevPage?.url.pathname, search: prevPage?.url.search });
    }
  };

  const goForward = () => {
    if (currentPageId.current + 1 <= historyTracker.length) {
      currentPageId.current += 1;
      const prevPage = historyTracker.find((item) => item.id === currentPageId.current);
      navigationState.current = 'FORWARD';

      navigate({ pathname: prevPage?.url.pathname, search: prevPage?.url.search });
    }
  };

  return {
    currentPageId: currentPageId.current,
    historyTracker,
    buttonActiveState,
    goBack,
    goForward,
  };
};

export default useHistoryTrack;
