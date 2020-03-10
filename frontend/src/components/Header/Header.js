import React from 'react';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import './Header.css';

const Header = () => (
  <AppBar>
    <Toolbar>
      <a href="/" className="header-title">
        <RestaurantIcon style={{ fontSize: 48, marginRight: 12 }} />
        <Typography variant="h6"><FormattedMessage id="Header.title" /></Typography>
      </a>
    </Toolbar>
  </AppBar>
);

export default Header;
