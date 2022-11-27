import React from 'react';
import ReactDOM from 'react-dom';
import 'index.scss';
import WebSiteApp from 'views/App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from 'contexts/UserContext';
import WebPlayerApp from 'views/WebPlayerApp';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <WebSiteApp />
        <WebPlayerApp />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
