import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type HistoryTrack = { id: number; url: string };
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
      currentPageId.current = prev.length + 1;
      return [
        ...prev,
        {
          id: prev.length + 1,
          url: pathname + search,
        },
      ];
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

  const goBack = () => {
    if (currentPageId.current - 1 > 0) {
      currentPageId.current -= 1;
      const prevPage = historyTracker.find((item) => item.id === currentPageId.current);
      navigationState.current = 'BACK';

      navigate(prevPage?.url!);
    }
  };

  const goForward = () => {
    if (currentPageId.current + 1 <= historyTracker.length) {
      currentPageId.current += 1;
      const prevPage = historyTracker.find((item) => item.id === currentPageId.current);
      navigationState.current = 'FORWARD';

      navigate(prevPage?.url!);
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
