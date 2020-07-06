import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { anyNumberOfChildren } from '../miscellaneousProps';
import Clickable from './Clickable';
import { Typography } from '@material-ui/core';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '70%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  justified: {
    justifyContent: 'space-between',
    display: 'flex',
  },
}));

export default function SimpleModal({ children, title }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography variant="h2" className={classes.justified}>
      { 
        title ?
        <div id="simple-modal-title">{title}</div>
        : <React.Fragment />
      }
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
        </IconButton>
      </Typography>
      <p id="simple-modal-description">
        { children }
      </p>
    </div>
  );

  return (
    <div>
      <Clickable handleClick={handleOpen}>
        { children }
      </Clickable>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

SimpleModal.propTypes = {
  children: anyNumberOfChildren.isRequired,
  title: PropTypes.string
};

SimpleModal.defaultProps = {
  title: undefined,
};
