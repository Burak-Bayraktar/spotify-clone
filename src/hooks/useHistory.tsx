import { BrowserHistoryContext } from 'contexts/HistoryContext';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useHistory = (dependencies: Array<any> = [], overwriteLastItem: boolean = false) => {
  const appHistory = useContext(BrowserHistoryContext);
  const location = useLocation();

  useEffect(() => {
    const state = location.state as 'back' | 'forward' | null;
    if (appHistory && !state) {
      appHistory.addToHistoryTrack(overwriteLastItem);
    }
  }, dependencies);

  return appHistory;
};

export default useHistory;
