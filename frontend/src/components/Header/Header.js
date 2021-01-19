import React from 'react';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import './Header.css';

import CartCustom from './CartCustom';

const Header = () => (
  <AppBar>
    <Toolbar>
      <div style={{display:'flex', width: '100%', justifyContent: 'space-between'}}>
        <div>
          <a href="/" className="header-title">
            <RestaurantIcon style={{ fontSize: 48, marginRight: 12 }} />
            <Typography variant="h6"><FormattedMessage id="Header.title" /></Typography>
          </a>
        </div>
        <div style={{alignSelf:'center'}}>
          <CartCustom />
        </div>
      </div>
    </Toolbar>
  </AppBar>
);

export default Header;
