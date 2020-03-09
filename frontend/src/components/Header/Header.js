import React from 'react';
import { FormattedMessage } from 'react-intl';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import './Header.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => (
  <AppBar>
    <Toolbar>
      <RestaurantIcon style={{ fontSize: 48, marginRight: 12 }} />
      <Typography variant="h6"><FormattedMessage id="Header.title" /></Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
