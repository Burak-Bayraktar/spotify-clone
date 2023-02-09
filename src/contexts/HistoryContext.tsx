import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type HistoryObject = { id: number; url: { pathname: string; search: string } };
type NavigateButtonName = 'back' | 'forward';

type HistoryTrack = {
  trackArray: Array<HistoryObject>;
  goBack: () => void;
  goForward: () => void;
  addToHistoryTrack: (overwriteLastItem: boolean) => void;
  currentPageId: number;
  buttonActiveState: Record<NavigateButtonName, boolean>;
};

type ProviderProps = {
  children: React.ReactNode;
};

const FIRST_ROUTE_ID: number = 1;

export const BrowserHistoryContext = createContext<HistoryTrack | undefined>(undefined);

export const HistoryProvider: React.FC<ProviderProps> = ({ children }) => {
  const [historyTracker, setHistoryTracker] = useState<HistoryObject[]>([]);
  const [buttonActiveState, setButtonActiveState] = useState<Record<NavigateButtonName, boolean>>({
    back: false,
    forward: false,
  });

  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const currentPageId = useRef<number>(FIRST_ROUTE_ID);

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

  const createNewHistoryTrackerArray = (previousArray: HistoryObject[]) => {
    return [
      ...previousArray,
      {
        id: previousArray.length + 1,
        url: { pathname, search },
      },
    ];
  };

  const addToHistoryTrack = (overwriteLastItem: boolean) => {
    setHistoryTracker(() => {
      const lastSavedPathname = historyTracker[historyTracker.length - 1]?.url.pathname;
      const areLastItemAndCurrentSame = lastSavedPathname === pathname;

      if (overwriteLastItem && areLastItemAndCurrentSame) {
        const newArr = [...historyTracker].slice(0, -1);
        return createNewHistoryTrackerArray(newArr);
      }

      currentPageId.current = historyTracker.length + 1;
      return createNewHistoryTrackerArray(historyTracker);
    });
  };

  const goBack = () => {
    if (currentPageId.current - 1 > 0) {
      currentPageId.current -= 1;
      const prevPage = historyTracker.find((item) => item.id === currentPageId.current);

      navigate({ pathname: prevPage?.url.pathname, search: prevPage?.url.search }, { state: { navigateState: 'back' } });
    }
  };

  const goForward = () => {
    if (currentPageId.current + 1 <= historyTracker.length) {
      currentPageId.current += 1;
      const prevPage = historyTracker.find((item) => item.id === currentPageId.current);

      navigate({ pathname: prevPage?.url.pathname, search: prevPage?.url.search }, { state: { navigateState: 'forward' } });
    }
  };

  const values: HistoryTrack = {
    currentPageId: currentPageId.current,
    buttonActiveState,
    trackArray: historyTracker,
    goBack,
    goForward,
    addToHistoryTrack,
  };
  return <BrowserHistoryContext.Provider value={values}>{children}</BrowserHistoryContext.Provider>;
};
