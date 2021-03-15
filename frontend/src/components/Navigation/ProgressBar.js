import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
const BorderLinearProgress = withStyles(theme => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

export default function ProgressBar({ value }) {
  const classes = useStyles();
  const val = value > 100 ? 100 : value;
  return (
    <div className={classes.root}>
      <BorderLinearProgress variant="determinate" value={val} />
    </div>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number,
};
ProgressBar.defaultProps = {
  value: 0,
};
