import React from 'react';
import { FormattedMessage } from 'react-intl';
import logo from '../../assets/svg/main-logo.svg';
import './Header.css';

const HeaderComponent = () => (
  <div className="header">
    <div className="header-logo">
      <img className="main-logo" src={logo} alt="What are the odds?" />
    </div>
    <div className="header-cell">
      <h1>
        <FormattedMessage id="Header.title" />
      </h1>
    </div>
  </div>
);

export default HeaderComponent;
