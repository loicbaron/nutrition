import React from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

export default function CartWithBadge({ num = 0 }) {
  return (
    <IconButton aria-label="cart" color="inherit">
      <StyledBadge badgeContent={num} color="secondary">
        <AssessmentOutlinedIcon />
      </StyledBadge>
    </IconButton>
  );
}

CartWithBadge.propTypes = {
  num: PropTypes.number,
};

CartWithBadge.defaultProps = {
  num: 0,
};
