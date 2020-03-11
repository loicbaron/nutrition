import React from 'react';
import './App.css';

import { IntlProvider, addLocaleData } from 'react-intl';
import intlEN from 'react-intl/locale-data/en';
import intlFR from 'react-intl/locale-data/fr';
import en from './translations/en.json';
import fr from './translations/fr.json';
import Page from './components/Layout/Page';
import AppRouter from './AppRouter';
import config from './configs/config';

addLocaleData([...intlEN, ...intlFR]);

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
