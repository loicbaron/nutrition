import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import { Typography, withStyles } from '@material-ui/core';
import { anyNumberOfChildren } from '../miscellaneousProps';

export default function TooltipControlled({children, isOpen, title, text}) {
  const [open, setOpen] = React.useState(isOpen);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#f50057',
        color: 'white',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
  }))(Tooltip);
  return (
        <HtmlTooltip
            title={
            <React.Fragment>
            <Typography color="inherit">{title}</Typography>
            {text}
            </React.Fragment>
            }
            open={open} onClose={handleClose} onOpen={handleOpen}
            arrow
        >
            { children }
        </HtmlTooltip>
  );
}

TooltipControlled.propTypes = {
  children: anyNumberOfChildren.isRequired,
  isOpen: PropTypes.bool,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};

TooltipControlled.defaultProps = {
  isOpen: false,
  text: null,
};
