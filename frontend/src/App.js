import React from 'react';
import './App.css';
import { IntlProvider } from 'react-intl';
import messagesEn from './translations/en.json';
import HeaderComponent from './components/Header/HeaderComponent';
import AppRouter from './AppRouter';

const messages = {
  en: messagesEn,
};

const App = () => (
  <IntlProvider locale="en" messages={messages.en}>
    <div className="App">
      <HeaderComponent />
      <AppRouter className="application-content" />
    </div>
  </IntlProvider>
);

export default App;
