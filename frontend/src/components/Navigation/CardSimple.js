import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';
import { anyNumberOfChildren } from '../miscellaneousProps';

const useStyles = makeStyles({
  root: {
    minWidth: 270,
  },
});

export default function CardSimple({ title, headerColor, children }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeaderSimple title={title} color={headerColor} />
      <CardContent>
        { children }
      </CardContent>
    </Card>
  );
}

CardSimple.propTypes = {
  title: PropTypes.string.isRequired,
  headerColor: PropTypes.string.isRequired,
  children: anyNumberOfChildren.isRequired,
};

const useHeaderStyles = makeStyles(() => ({
  root: props => ({
    backgroundColor: props.color,
  }),
}));

export function CardHeaderSimple({ title, color }) {
  const classes = useHeaderStyles({ color });
  return (
    <CardHeader title={title} classes={classes} />
  );
}
CardHeaderSimple.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
