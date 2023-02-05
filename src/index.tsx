import React from 'react';
import { createRoot } from 'react-dom/client';
import 'index.scss';
import WebSiteApp from 'views/App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from 'contexts/UserContext';
import { HistoryProvider } from 'contexts/HistoryContext';
import WebPlayerApp from 'views/WebPlayerApp';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <WebSiteApp />
        <HistoryProvider>
          <WebPlayerApp />
        </HistoryProvider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
