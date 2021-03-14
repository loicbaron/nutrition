import React from 'react';
import './App.css';

import { IntlProvider } from 'react-intl';
import en from './translations/en.json';
import fr from './translations/fr.json';
import Page from './components/Layout/Page';
import AppRouter from './AppRouter';
import config from './configs/config';

const messages = {
  en,
  fr,
};

const App = () => (
  <IntlProvider locale={config.locale} messages={messages[config.locale]} defaultLocale="en">
    <div className="App">
      <Page>
        <AppRouter className="application-content" />
      </Page>
    </div>
  </IntlProvider>
);

export default App;
